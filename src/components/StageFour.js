import React from 'react'

const StageFour = ({ end, handlePoints, points }) => {
  const verifyPoints = () => {
    end();
    handlePoints();
  }

  let ponto = points;

  return (
    <div>
        <h1>Gray Bicycle</h1>
        <p>Pontuação: <span>{ponto}</span> </p>
        <div>
          <button className="car bike" onClick={end}></button>
          <button className="car bike2" onClick={end}></button>
        </div>
        <div>
          <button className="car bike3" onClick={end}></button>
          <button className="car bike4" onClick={verifyPoints} ></button>
        </div>
    </div>
  )
}

export default StageFour;