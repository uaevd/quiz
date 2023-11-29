import { useState, useEffect, createContext } from 'react';

import { OptionItem } from 'types/OptionItem';

interface Context {
    readonly categories: ReadonlyArray<OptionItem>;
    readonly difficulties: ReadonlyArray<OptionItem>;
    readonly maxProblemCount: number;
    readonly quizSetupQueries: {
        readonly category: string;
        readonly difficulty: string;
        readonly problemCount: number;
    };

    readonly onCategoryChange: (value: string) => void;
    readonly onDifficultyChange: (value: string) => void;
    readonly onProblemCountChange: (value: number) => void;
}

export const QuizSetupContext = createContext<Context>({
    categories: [],
    difficulties: [],
    maxProblemCount: 0,
    quizSetupQueries: {
        category: '',
        difficulty: '',
        problemCount: 0,
    },
    /* eslint-disable @typescript-eslint/no-empty-function */
    onCategoryChange: () => {},
    onDifficultyChange: () => {},
    onProblemCountChange: () => {},
    /* eslint-enable @typescript-eslint/no-empty-function */
});

interface Props {
    readonly children: JSX.Element | JSX.Element[];
}

export const QuizSetupContextProvider = ({ children }: Props) => {
    const [categories, setCategories] = useState<ReadonlyArray<OptionItem>>([]);
    const difficulties = [
        { value: '', label: 'Any' },
        { value: 'easy', label: 'Easy' },
        { value: 'medium', label: 'Medium' },
        { value: 'hard', label: 'Hard' },
    ];
    const [maxProblemCount, setMaxProblemCount] = useState(0);
    const [quizSetupQueries, setQuizSetupQueries] = useState({
        category: '',
        difficulty: '',
        problemCount: 0,
    });

    useEffect(() => {
        fetch('https://opentdb.com/api_category.php')
            .then((response) => response.json())
            .then(
                (json: {
                    trivia_categories: ReadonlyArray<{
                        id: number;
                        name: string;
                    }>;
                }) => json.trivia_categories,
            )
            .then((array) =>
                array.map(
                    ({ id, name }): OptionItem => ({
                        value: String(id),
                        label: name,
                    }),
                ),
            )
            .then((items) => setCategories([{ value: '', label: 'Any' }, ...items]))
            .catch((error) => console.error(error));
        return () => setCategories([]);
    }, []);
    useEffect(() => {
        if (quizSetupQueries.category) {
            fetch(`https://opentdb.com/api_count.php?category=${quizSetupQueries.category}`)
                .then((response) => response.json())
                .then(
                    (json: {
                        category_id: number;
                        category_question_count: {
                            total_question_count: number;
                            total_easy_question_count: number;
                            total_medium_question_count: number;
                            total_hard_question_count: number;
                        };
                    }) => json.category_question_count,
                )
                .then((counts) => {
                    switch (quizSetupQueries.difficulty) {
                        case '':
                            return counts.total_question_count;
                        case 'easy':
                            return counts.total_easy_question_count;
                        case 'medium':
                            return counts.total_medium_question_count;
                        case 'hard':
                            return counts.total_hard_question_count;
                        default:
                            throw Error('Invalid Difficulty');
                    }
                })
                .then((count) => setMaxProblemCount(Math.min(count, 50)))
                .catch((error) => console.error(error));
        } else {
            setMaxProblemCount(50);
        }
        return () => setMaxProblemCount(0);
    }, [quizSetupQueries.category, quizSetupQueries.difficulty]);

    const onCategoryChange = (value: string) =>
        setQuizSetupQueries({ ...quizSetupQueries, category: value });
    const onDifficultyChange = (value: string) =>
        setQuizSetupQueries({ ...quizSetupQueries, difficulty: value });
    const onProblemCountChange = (value: number) =>
        setQuizSetupQueries({ ...quizSetupQueries, problemCount: value });

    return (
        <QuizSetupContext.Provider
            value={{
                categories,
                difficulties,
                maxProblemCount,
                quizSetupQueries,
                onCategoryChange,
                onDifficultyChange,
                onProblemCountChange,
            }}
        >
            {children}
        </QuizSetupContext.Provider>
    );
};
