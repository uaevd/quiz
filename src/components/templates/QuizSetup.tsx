import styled from '@emotion/styled';

import { QuizOptions } from 'components/organisms/QuizOptions';

const Container = styled.div`
    align-items: center;
    background: linear-gradient(#1c1917 50%, #ffb92a 50%);
    color: #333;
    display: flex;
    height: 100vh;
    justify-content: center;
`;

export const QuizSetup = () => (
    <Container>
        <QuizOptions />
    </Container>
);
