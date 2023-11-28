import styled from '@emotion/styled';

const Select = styled.select`
    box-sizing: border-box;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
`;

interface Props {
    readonly items: ReadonlyArray<{ value: string; label: string }>;
}

export const SelectItems = ({ items }: Props) => (
    <Select>
        {items.map(({ value, label }) => (
            <option key={`option-${value}`} value={value}>
                {label}
            </option>
        ))}
    </Select>
);
