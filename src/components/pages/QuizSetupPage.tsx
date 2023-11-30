import { QuizSetup } from 'components/templates/QuizSetup';
import { QuizSetupContextProvider } from 'contexts/QuizSetupContext';

export const QuizSetupPage = () => (
    <QuizSetupContextProvider>
        <QuizSetup />
    </QuizSetupContextProvider>
);
