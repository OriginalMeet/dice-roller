import './App.css';
import Dice from './Components/Dice';
import { useState } from 'react';

function App() {
  const [diceVal, setDiceVal] = useState(Math.floor(Math.random() * 6));
  const [numDice, setNumDice] = useState(1);

  const setDiceNumber = (num) => {
    if(num > 10) {
      setNumDice(10);
    } else if(num < 1) {
      setNumDice(1);
    } else {
      setNumDice(num);
    }
  }  

  return (
    <div className="App">
      <header className="App-header">
        <h3>Dice Roller</h3>
        <input type="number" value={numDice} id="numDice" min="1" max="10" onChange={(v) => setDiceNumber(v.target.value)} />
        <Dice val={diceVal} />
        {numDice}
        <button onClick={() => setDiceVal(Math.floor(Math.random() * 6))}>Roll Dice</button>
      </header>
    </div>
  );
}

export default App;
