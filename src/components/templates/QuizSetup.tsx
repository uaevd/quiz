import styled from '@emotion/styled';

import { StartButton } from 'components/atoms/StartButton';
import { QuizOptions } from 'components/organisms/QuizOptions';
import { OptionItem } from 'types/OptionItem';

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
    readonly categories: ReadonlyArray<OptionItem>;
    readonly difficulties: ReadonlyArray<OptionItem>;
}

export const QuizSetup = ({ categories, difficulties }: Props) => (
    <Container>
        <Contents>
            <QuizOptions categories={categories} difficulties={difficulties} />
            <StartButton />
        </Contents>
    </Container>
);
