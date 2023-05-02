//CSS
import './App.css';

//Componentes
import Comecar from './components/Comecar';
import StageOne from './components/StageOne';
import StageThree from './components/StageThree';
import StageTwo from './components/StageTwo';
import StageFour from './components/StageFour';
import GameOver from './components/GameOver';

// React Hooks
import { useState } from 'react';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "gameOne"},
  {id: 3, name: "gameTwo"},
  {id: 4, name: "gameThree"},
  {id: 5, name: "gameFour"},
  {id: 6, name: "end"},
];

// Pontos do game
let points = 0;


function App() {

  // Começando o game
  const [gameStage, setGameStage] = useState(stages[0].name);

  // Função para verificar se acertou
  const handlePoints = () => {
    points++;
    console.log(points);
  }

  // Função para ir para a primeira tela do jogo
  const comecar = () => {
    setGameStage(stages[1].name);
  }

  // Função para ir para a segunda tela do jogo
  const stageTwo = () => {
    setGameStage(stages[2].name);
  }

  // Função para ir para a terceira tela do jogo
  const stageThree = () => {
    setGameStage(stages[3].name);
  }

  // Função para ir para a quarta tela do jogo
  const stageFour = () => {
    setGameStage(stages[4].name);
  }

  // Função que verifica quanto você acertou e finaliza o game
  const end = () => {
    setGameStage(stages[5].name);
    return points.value;
  }

  return (
    <div className="App">
      {gameStage === "start" && <Comecar comecar={comecar} />}
      {gameStage === "gameOne" && <StageOne stageTwo={stageTwo} handlePoints={handlePoints} points={points} />}
      {gameStage === "gameTwo" && <StageTwo stageThree={stageThree} handlePoints={handlePoints} points={points} />}
      {gameStage === "gameThree" && <StageThree stageFour={stageFour} handlePoints={handlePoints} points={points} /> }
      {gameStage === "gameFour" && <StageFour end={end} handlePoints={handlePoints} points={points} />} {/* Colocar uma função para resetar o game */}
      {gameStage === "end" && <GameOver points={points} /> }
    </div>
  );
}

export default App;
