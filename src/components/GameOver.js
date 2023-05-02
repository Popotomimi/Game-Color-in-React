import React from 'react'

const GameOver = ({ points }) => {

  let ponto = points;

  return (
    <div>
      <h1>Fim do jogo</h1>
      <span className='winner'> &#127942; </span>
      {ponto >= 4 && <p>Parabéns você acertou tudo!!! <br /> <br /> Pontuação: <span className='points'>{ponto}</span></p>}
      {ponto < 4 && <p>Parabéns!!! <br /> <br /> Pontuação: <span className='points'>{ponto}</span> </p> }
    </div>
  )
}

export default GameOver;