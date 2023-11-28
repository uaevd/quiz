import styled from '@emotion/styled';

import { Button } from 'components/atoms/Button';
import { QuizOptions } from 'components/organisms/QuizOptions';

const Container = styled.div`
    align-items: center;
    background: linear-gradient(#1c1917 50%, #ffb92a 50%);
    color: #333;
    display: flex;
    height: 100vh;
    justify-content: center;
`;

const Contents = styled.div`
    align-items: center;
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

interface Props {
    readonly categories: ReadonlyArray<{ value: string; label: string }>;
    readonly difficulties: ReadonlyArray<{ value: string; label: string }>;
}

export const QuizSetup = ({ categories, difficulties }: Props) => (
    <Container>
        <Contents>
            <QuizOptions categories={categories} difficulties={difficulties} />
            <Button label="Play Game" />
        </Contents>
    </Container>
);
