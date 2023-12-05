import styled from '@emotion/styled';

import { OptionItem } from 'interfaces/OptionItem';

const Select = styled.select`
    box-sizing: border-box;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
`;

interface Props {
    readonly disabled?: boolean;
    readonly items: ReadonlyArray<OptionItem>;
    readonly onChange: (value: string) => void;
}

export const SelectItems = ({ disabled = false, items, onChange }: Props) => (
    <Select disabled={disabled} onChange={(e) => onChange(e.target.value)}>
        {items.map(({ value, label }) => (
            <option key={`option-${value}`} value={value}>
                {label}
            </option>
        ))}
    </Select>
);
