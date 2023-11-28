import { Label } from 'components/atoms/Label';

interface Props {
    readonly label: string;
    readonly inputType: JSX.Element;
}

export const InputForm = ({ label, inputType }: Props) => (
    <div>
        <Label text={label} />
        {inputType}
    </div>
);
