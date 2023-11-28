import styled from '@emotion/styled';

import { Label } from 'components/atoms/Label';

const Container = styled.div`
    margin: 10px;
`;

interface Props {
    readonly label: string;
    readonly inputElement: JSX.Element;
}

export const InputForm = ({ label, inputElement }: Props) => (
    <Container>
        <Label text={label} />
        {inputElement}
    </Container>
);
