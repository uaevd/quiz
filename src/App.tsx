import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { QuizSetupPage } from 'components/pages/QuizSetupPage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<QuizSetupPage />} />
            </Routes>
        </BrowserRouter>
    );
}
