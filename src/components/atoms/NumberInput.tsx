import styled from '@emotion/styled';

const Input = styled.input`
    box-sizing: border-box;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
`;

interface Props {
    readonly disabled?: boolean;
    readonly value: string;
    readonly onChange: (value: string) => void;
}

export const NumberInput = ({ disabled = false, value, onChange }: Props) => (
    <Input
        type="number"
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
    />
);
