import React from 'react'

const StageTwo = ( {stageThree, handlePoints, points} ) => {
  const verifyPoints = () => {
    stageThree();
    handlePoints();
  }

  let ponto = points;

  return (
    <div>
        <h1>Orange Ball</h1>
        <p>Pontuação: <span>{ponto}</span> </p>
          <div>
            <button className="car ball" onClick={verifyPoints}></button>
            <button className="car ball2" onClick={stageThree}></button>
          </div>
          <div>
            <button className="car ball3" onClick={stageThree}></button>
            <button className="car ball4" onClick={stageThree}></button>
        </div>
    </div>
  )
}

export default StageTwo;