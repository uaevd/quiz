import styled from '@emotion/styled';

const Input = styled.input`
    box-sizing: border-box;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
`;

interface Props {
    readonly value: string;
    readonly onChange: (value: string) => void;
}

export const InputNumber = ({ value, onChange }: Props) => (
    <Input min="0" type="number" value={value} onChange={(e) => onChange(e.target.value)} />
);
