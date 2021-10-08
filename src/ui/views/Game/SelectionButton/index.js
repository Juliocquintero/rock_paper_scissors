import { Button, ButtonCaption } from './styles';

const SelectionButton = ({ value, handleSelection }) => {
  return (
    <Button onClick={() => handleSelection(value)}>
      <i className={`fas fa-hand-${value}`} />
      <ButtonCaption>{value}</ButtonCaption>
    </Button>
  );
};

export default SelectionButton;
