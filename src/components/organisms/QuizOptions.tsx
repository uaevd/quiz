import { InputNumber } from 'components/atoms/InputNumber';
import { SelectItems } from 'components/atoms/SelectItems';
import { InputForm } from 'components/molecules/InputForm';

interface Props {
    readonly categories: ReadonlyArray<{ value: string; label: string }>;
    readonly difficulties: ReadonlyArray<{ value: string; label: string }>;
}

export const QuizOptions = ({ categories, difficulties }: Props) => (
    <div>
        <InputForm label="Category" inputType={<SelectItems items={categories} />} />
        <InputForm
            label="Problems Count"
            inputType={<InputNumber value="10" onChange={console.log} />}
        />
        <InputForm label="Difficulty" inputType={<SelectItems items={difficulties} />} />
    </div>
);
