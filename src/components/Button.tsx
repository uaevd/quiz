interface Props {
    readonly label: string;
    readonly onClick?: () => void;
}

export const Button = ({ label, onClick }: Props) => <button onClick={onClick}>{label}</button>;
