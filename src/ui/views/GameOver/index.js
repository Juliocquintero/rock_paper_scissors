import React from 'react';
import {
  ButtonReset,
  ElectionsWrapper,
  GameOverWrapper,
  Result,
  Selection,
  SelectionResalted,
} from './styles';

const GameOver = ({ results, playAgain }) => {
  return (
    <GameOverWrapper>
      <div className="resultado">
        <Result> {results?.result}!</Result>
      </div>

      <ElectionsWrapper>
        <Selection>
          You
          <SelectionResalted>{results?.userSelection}</SelectionResalted>
        </Selection>

        <h4>Vs</h4>

        <Selection>
          <SelectionResalted>{results?.botElection}</SelectionResalted>
          CPU
        </Selection>
      </ElectionsWrapper>

      <ButtonReset onClick={playAgain}>
        Play Again
        <i className="fas fa-undo-alt" />
      </ButtonReset>
    </GameOverWrapper>
  );
};

export default GameOver;
