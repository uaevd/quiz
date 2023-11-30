import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { OptionItem } from 'types/OptionItem';

interface Context {
    readonly categories: ReadonlyArray<OptionItem>;
    readonly difficulties: ReadonlyArray<OptionItem>;
    readonly maxProblems: number;
    readonly quizSetupQueries: {
        readonly category: string;
        readonly difficulty: string;
        readonly problems: number;
    };

    readonly onCategoryChange: (value: string) => void;
    readonly onDifficultyChange: (value: string) => void;
    readonly onProblemsChange: (value: number) => void;
    readonly onGameStart: () => void;
}

export const QuizSetupContext = createContext<Context>({
    categories: [],
    difficulties: [],
    maxProblems: 0,
    quizSetupQueries: {
        category: '',
        difficulty: '',
        problems: 0,
    },
    /* eslint-disable @typescript-eslint/no-empty-function */
    onCategoryChange: () => {},
    onDifficultyChange: () => {},
    onProblemsChange: () => {},
    onGameStart: () => {},
    /* eslint-enable @typescript-eslint/no-empty-function */
});

interface Props {
    readonly children: JSX.Element | JSX.Element[];
}

export const QuizSetupContextProvider = ({ children }: Props) => {
    const navigate = useNavigate();

    const [categories, setCategories] = useState<ReadonlyArray<OptionItem>>([]);
    const difficulties = [
        { value: '', label: 'Any' },
        { value: 'easy', label: 'Easy' },
        { value: 'medium', label: 'Medium' },
        { value: 'hard', label: 'Hard' },
    ];
    const [maxProblems, setMaxProblems] = useState(0);
    const [quizSetupQueries, setQuizSetupQueries] = useState({
        category: '',
        difficulty: '',
        problems: 0,
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
                .then((count) => setMaxProblems(Math.min(count, 50)))
                .catch((error) => console.error(error));
        } else {
            setMaxProblems(50);
        }
        return () => setMaxProblems(0);
    }, [quizSetupQueries.category, quizSetupQueries.difficulty]);

    const onCategoryChange = (value: string) =>
        setQuizSetupQueries({ ...quizSetupQueries, category: value });
    const onDifficultyChange = (value: string) =>
        setQuizSetupQueries({ ...quizSetupQueries, difficulty: value });
    const onProblemsChange = (value: number) =>
        setQuizSetupQueries({ ...quizSetupQueries, problems: value });
    const onGameStart = () => {
        const { category, difficulty, problems } = quizSetupQueries;
        if (problems <= 0 || problems > maxProblems) {
            alert(`Problems Must Be from 1 to ${maxProblems}`);
            return;
        }
        const params = new URLSearchParams();
        params.set('problems', String(problems));
        if (category) params.set('category', category);
        if (difficulty) params.set('difficulty', difficulty);

        navigate(`/game?${params.toString()}`);
    };

    return (
        <QuizSetupContext.Provider
            value={{
                categories,
                difficulties,
                maxProblems,
                quizSetupQueries,
                onCategoryChange,
                onDifficultyChange,
                onProblemsChange,
                onGameStart,
            }}
        >
            {children}
        </QuizSetupContext.Provider>
    );
};
