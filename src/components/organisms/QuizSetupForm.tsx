import { useContext } from 'react';
import styled from '@emotion/styled';

import { Label } from 'components/atoms/Label';
import { NumberInput } from 'components/atoms/NumberInput';
import { SelectItems } from 'components/atoms/SelectItems';
import { StartButton } from 'components/atoms/StartButton';
import { QuizSetupContext } from 'contexts/QuizSetupContext';

const Container = styled.div`
    align-items: stretch;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 4 20px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    flex-basis: 500px;
    justify-content: center;
    margin: 20px;
    padding: 40px;
`;

const InputGroup = styled.form`
    margin: 10px;
`;

export const QuizSetupForm = () => {
    const {
        categories,
        difficulties,
        maxProblems,
        quizSetupQueries,
        onCategoryChange,
        onDifficultyChange,
        onProblemsChange,
        onGameStart,
    } = useContext(QuizSetupContext);

    return (
        <Container>
            <InputGroup>
                <Label text="Category" />
                <SelectItems
                    items={categories}
                    disabled={!categories.length}
                    onChange={onCategoryChange}
                />
            </InputGroup>
            <InputGroup>
                <Label text="Difficulty" />
                <SelectItems
                    items={difficulties}
                    disabled={!difficulties.length}
                    onChange={onDifficultyChange}
                />
            </InputGroup>
            <InputGroup>
                <Label text={`Problems (Max: ${maxProblems || 'Loading...'})`} />
                <NumberInput
                    value={String(quizSetupQueries.problems)}
                    disabled={!maxProblems}
                    onChange={(value) => onProblemsChange(value ? parseInt(value) : 0)}
                />
            </InputGroup>
            <StartButton onClick={onGameStart} />
        </Container>
    );
};
