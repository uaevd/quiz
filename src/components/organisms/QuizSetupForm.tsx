import { useContext } from 'react';
import styled from '@emotion/styled';

import { NumberInput } from 'components/atoms/NumberInput';
import { SelectItems } from 'components/atoms/SelectItems';
import { StartButton } from 'components/atoms/StartButton';
import { InputForm } from 'components/molecules/InputForm';
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

export const QuizSetupForm = () => {
    const {
        categories,
        difficulties,
        maxProblemCount,
        quizSetupQueries,
        onCategoryChange,
        onDifficultyChange,
        onProblemCountChange,
    } = useContext(QuizSetupContext);

    return (
        <Container>
            <InputForm
                label="Category"
                inputElement={
                    <SelectItems
                        items={categories}
                        disabled={!categories.length}
                        onChange={onCategoryChange}
                    />
                }
            />
            <InputForm
                label="Difficulty"
                inputElement={
                    <SelectItems
                        items={difficulties}
                        disabled={!difficulties.length}
                        onChange={onDifficultyChange}
                    />
                }
            />
            <InputForm
                label={`Problem Count (Max: ${maxProblemCount || 'Loading...'})`}
                inputElement={
                    <NumberInput
                        value={String(quizSetupQueries.problemCount)}
                        onChange={(value) => onProblemCountChange(value ? parseInt(value) : 0)}
                    />
                }
            />
            <StartButton />
        </Container>
    );
};
