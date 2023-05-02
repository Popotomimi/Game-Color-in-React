import React from 'react'

const StageThree = ( {stageFour, handlePoints, points} ) => {
  const verifyPoints = () => {
    stageFour();
    handlePoints();
  }

  let ponto = points;

  return (
    <div>
        <h1>Purple Skateboard</h1>
        <p>Pontuação: <span>{ponto}</span> </p>
        <div>
          <button className="car skate" onClick={stageFour}></button>
          <button className="car skate2" onClick={verifyPoints}></button>
        </div>
        <div>
          <button className="car skate3" onClick={stageFour}></button>
          <button className="car skate4" onClick={stageFour}></button>
      </div>
    </div>
  )
}

export default StageThree