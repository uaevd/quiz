import { Button } from 'components/atoms/Button';
import { QuizOptions } from 'components/organisms/QuizOptions';

interface Props {
    readonly categories: ReadonlyArray<{ value: string; label: string }>;
    readonly difficulties: ReadonlyArray<{ value: string; label: string }>;
}

export const QuizSetup = ({ categories, difficulties }: Props) => (
    <div>
        <QuizOptions categories={categories} difficulties={difficulties} />
        <Button label="Play Game" />
    </div>
);
