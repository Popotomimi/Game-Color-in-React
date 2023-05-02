
const Comecar = ({comecar}) => {
  

  return (
    <div className='App'>
         <h1>Game Color</h1>
      <div className="img">
        <img src='../img/tintas.jpg' alt="Tintas coloridas" />
      </div>
      <div className="button">
        <button className='button-87' onClick={comecar}> Começar </button>
      </div>
    </div>
  )
}

export default Comecar;