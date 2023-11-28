import styled from '@emotion/styled';

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

interface Props {
    readonly categories: ReadonlyArray<OptionItem>;
    readonly difficulties: ReadonlyArray<OptionItem>;
}

export const QuizSetup = ({ categories, difficulties }: Props) => (
    <Container>
        <QuizOptions categories={categories} difficulties={difficulties} />
    </Container>
);
