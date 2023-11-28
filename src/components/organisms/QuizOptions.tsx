import styled from '@emotion/styled';

import { InputNumber } from 'components/atoms/InputNumber';
import { SelectItems } from 'components/atoms/SelectItems';
import { InputForm } from 'components/molecules/InputForm';
import { OptionItem } from 'types/OptionItem';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
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
    </Container>
);
