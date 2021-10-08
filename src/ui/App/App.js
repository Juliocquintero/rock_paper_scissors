import { useContext } from 'react';
import GameContext from '../../hoc/gameContext';
import '../../styles/App.css';
import { Game } from '../views/Game';
import GameOver from '../views/GameOver';
import { AppWrapper, Header, Title } from './styles';

const App = () => {
  const { results, gameInCurse, handleSelection, playAgain } = useContext(GameContext);
  return (
    <AppWrapper>
      <Header></Header>
      <Title>Rock Paper or Scissors</Title>
      {gameInCurse ? (
        <Game handleSelection={handleSelection} />
      ) : (
        <GameOver results={results} playAgain={playAgain} />
      )}
    </AppWrapper>
  );
};

export default App;
