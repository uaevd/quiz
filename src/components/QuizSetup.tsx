import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Label } from 'components/Label';
import { Select } from 'components/Select';

export const QuizSetup = () => (
    <div>
        <div>
            <Label />
            <Select />
        </div>
        <div>
            <Label />
            <Input />
        </div>
        <div>
            <Label />
            <Select />
        </div>
        <Button />
    </div>
);
