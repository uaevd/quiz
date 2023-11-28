import styled from '@emotion/styled';

import { InputNumber } from 'components/atoms/InputNumber';
import { SelectItems } from 'components/atoms/SelectItems';
import { StartButton } from 'components/atoms/StartButton';
import { InputForm } from 'components/molecules/InputForm';
import { OptionItem } from 'types/OptionItem';

const Container = styled.div`
    align-items: stretch;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 4 20px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    flex-basis: 500px;
    justify-content: center;
    margin: 20px;
    padding: 40px;
`;

interface Props {
    readonly categories: ReadonlyArray<OptionItem>;
    readonly difficulties: ReadonlyArray<OptionItem>;
}

export const QuizOptions = ({ categories, difficulties }: Props) => (
    <Container>
        <InputForm
            label="Category"
            inputElement={<SelectItems items={categories} onChange={console.log} />}
        />
        <InputForm
            label="Difficulty"
            inputElement={<SelectItems items={difficulties} onChange={console.log} />}
        />
        <InputForm
            label="Problem Count"
            inputElement={<InputNumber value="10" onChange={console.log} />}
        />
        <StartButton />
    </Container>
);
