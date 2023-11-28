import { QuizSetup } from 'components/templates/QuizSetup';

export const QuizSetupPage = () => (
    <QuizSetup
        categories={[{ value: '', label: 'Any' }]}
        difficulties={[{ value: '', label: 'Any' }]}
    />
);
