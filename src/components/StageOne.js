import "../App.css";

const StageOne = ({ stageTwo, handlePoints, points }) => {

  let ponto = points;
  
  const verifyPoints = () => {
    stageTwo();
    handlePoints();
  }

  return (
    <div>
      <h1>Yellow Star</h1>
      <p>Pontuação: <span>{ponto}</span> </p>
      <div>
        <button className="car car1" onClick={stageTwo}></button>
        <button className="car car2" onClick={stageTwo}></button>
      </div>
      <div>
        <button className="car car3" onClick={verifyPoints}></button>
        <button className="car car4" onClick={stageTwo} ></button>
      </div>
    </div>
  )
}

export default StageOne;