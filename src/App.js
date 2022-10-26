import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPoint, resetPoints, subtractPoint, timesTwo } from './features/gameSlice';




function App() {
  const dispatch = useDispatch()
  const points = useSelector((state) => state.game.points)

const handleButtonClick = () => {
      dispatch(addPoint())
}

const handleSubtractionclick = () => {
  dispatch(subtractPoint())
}

const handleReset = () =>{
  dispatch(timesTwo())
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={handleButtonClick}/>
    
        <h1>Points: {points}</h1>
      </header>
     <div><button onClick={handleSubtractionclick}>subtract</button>
     <button onClick={handleReset}>reset</button></div>
    </div>
  );
}

export default App;
