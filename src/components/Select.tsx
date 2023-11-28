interface Props {
    readonly options: ReadonlyArray<{ value: string; label: string }>;
}

export const Select = ({ options }: Props) => (
    <select>
        {options.map(({ value, label }) => (
            <option key={`option-${value}`} value={value}>
                {label}
            </option>
        ))}
    </select>
);
