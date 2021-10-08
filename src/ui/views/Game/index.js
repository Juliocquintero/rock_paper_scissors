import SelectionButton from './SelectionButton';
import { SelectionButtonsWrapper } from './styles';

export const Game = ({ handleSelection }) => {
  const OPTIONS_TO_SELECT = ['rock', 'paper', 'scissors'];
  return (
    <SelectionButtonsWrapper>
      {OPTIONS_TO_SELECT.map((el, i) => (
        <SelectionButton value={el} key={i} handleSelection={handleSelection} />
      ))}
    </SelectionButtonsWrapper>
  );
};
