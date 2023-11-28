interface Props {
    readonly value: string;
    readonly onChange: (value: string) => void;
}

export const InputNumber = ({ value, onChange }: Props) => (
    <input type="number" value={value} onChange={(e) => onChange(e.target.value)} />
);
