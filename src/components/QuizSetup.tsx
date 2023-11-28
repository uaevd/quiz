import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Label } from 'components/Label';
import { Select } from 'components/Select';

interface Props {
    readonly categories: ReadonlyArray<{ value: string; label: string }>;
    readonly difficulties: ReadonlyArray<{ value: string; label: string }>;
}

export const QuizSetup = ({ categories, difficulties }: Props) => (
    <div>
        <div>
            <Label text="Category" />
            <Select options={categories} />
        </div>
        <div>
            <Label text="Problem Counts" />
            <Input value="10" onChange={console.log} />
        </div>
        <div>
            <Label text="Difficulty" />
            <Select options={difficulties} />
        </div>
        <Button label="Play Game" />
    </div>
);
