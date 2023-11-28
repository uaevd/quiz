import styled from '@emotion/styled';

const Button = styled.button`
    background-color: #1c1917;
    border: none;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    font-size: 1em;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    transition:
        background-color 0.3s ease,
        transform 0.1s ease;
    width: 100%;
    margin-top: 20px;
    padding: 12px 25px;

    &:hover {
        background-color: #c78500;
        transform: scale(1.05);
    }
`;

interface Props {
    readonly label: string;
    readonly onClick?: () => void;
}

export const StartButton = ({ label, onClick }: Props) => (
    <Button onClick={onClick}>{label}</Button>
);
