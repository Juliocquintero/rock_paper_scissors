import { createContext, useEffect, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [userSelection, setUserSelection] = useState(null);
  const [gameInCurse, setGameInCurse] = useState(true);
  const [results, setResults] = useState({});

  useEffect(() => {
    const botElection = randomElection();
    if (userSelection) HandleGameResults(userSelection, botElection);
  }, [userSelection]);

  const randomElection = () => {
    const possiblesElection = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    const electionCPU = possiblesElection[randomNumber];
    return electionCPU;
  };

  const handleSelection = (option) => {
    setUserSelection(option);
  };

  const HandleGameResults = (userSelection, botElection) => {
    if (userSelection === botElection) {
      //cuando el usuario  y la maquina (funcion jugadapc) elijan lo mismo, sera empate y se muestra la funcion de tie.
      setResults({ userSelection, botElection, result: 'Tie' });
    } else if (userSelection === 'rock' && botElection === 'scissors') {
      //cuando el usuario elija piedra y la maquina (funcion jugadapc) elija tijeras, el usuario ganara y mostrara la funcion win
      setResults({ userSelection, botElection, result: 'WIN' });
    } else if (userSelection === 'paper' && botElection === 'rock') {
      //cuando el usuario elija papel y la maquina (funcion jugadapc) elija piedra, el usuario ganara y mostrara la funcion win
      setResults({ userSelection, botElection, result: 'WIN' });
    } else if (userSelection === 'scissors' && botElection === 'paper') {
      //cuando el usuario elija tijeras y la maquina (funcion jugadapc) elija papel, el usuario ganara y mostrara la funcion win
      setResults({ userSelection, botElection, result: 'WIN' });
    } else {
      setResults({ userSelection, botElection, result: 'Loose' });
    }
    setGameInCurse(false);
  };

  const playAgain = () => {
    setGameInCurse(true);
    setResults({});
    setUserSelection(undefined);
  };

  const data = { results, gameInCurse, handleSelection, playAgain };
  return <GameContext.Provider value={data}>{children}</GameContext.Provider>;
};

export { GameProvider };
export default GameContext;
