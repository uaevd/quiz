import { QuizSetup } from 'components/QuizSetup';

export const QuizSetupPage = () => (
    <QuizSetup
        categories={[{ value: '', label: 'Any' }]}
        difficulties={[
            {
                value: '',
                label: 'Any',
            },
            {
                value: 'easy',
                label: 'Easy',
            },
            {
                value: 'medium',
                label: 'Medium',
            },
            {
                value: 'hard',
                label: 'Hard',
            },
        ]}
    />
);
