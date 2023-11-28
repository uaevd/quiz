interface Props {
    readonly items: ReadonlyArray<{ value: string; label: string }>;
}

export const SelectItems = ({ items }: Props) => (
    <select>
        {items.map(({ value, label }) => (
            <option key={`option-${value}`} value={value}>
                {label}
            </option>
        ))}
    </select>
);
