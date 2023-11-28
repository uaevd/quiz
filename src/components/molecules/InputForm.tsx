import styled from '@emotion/styled';

import { Label } from 'components/atoms/Label';

const Container = styled.div`
    margin: 10px;
`;

interface Props {
    readonly label: string;
    readonly inputType: JSX.Element;
}

export const InputForm = ({ label, inputType }: Props) => (
    <Container>
        <Label text={label} />
        {inputType}
    </Container>
);
