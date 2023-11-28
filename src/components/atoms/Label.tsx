import styled from '@emotion/styled';

const Container = styled.div`
    color: #000;
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
`;

interface Props {
    readonly text: string;
}

export const Label = ({ text }: Props) => <Container>{text}</Container>;
