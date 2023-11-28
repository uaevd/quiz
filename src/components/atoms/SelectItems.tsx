import styled from '@emotion/styled';

import { OptionItem } from 'types/OptionItem';

const Select = styled.select`
    box-sizing: border-box;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
`;

interface Props {
    readonly items: ReadonlyArray<OptionItem>;
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
