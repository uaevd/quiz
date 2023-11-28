import { InputNumber } from 'components/atoms/InputNumber';
import { Label } from 'components/atoms/Label';
import { SelectItems } from 'components/atoms/SelectItems';

interface Props {
    readonly categories: ReadonlyArray<{ value: string; label: string }>;
    readonly difficulties: ReadonlyArray<{ value: string; label: string }>;
}

export const QuizOptions = ({ categories, difficulties }: Props) => (
    <div>
        <div>
            <Label text="Category" />
            <SelectItems items={categories} />
        </div>
        <div>
            <Label text="Problem Counts" />
            <InputNumber value="10" onChange={console.log} />
        </div>
        <div>
            <Label text="Difficulty" />
            <SelectItems items={difficulties} />
        </div>
    </div>
);
