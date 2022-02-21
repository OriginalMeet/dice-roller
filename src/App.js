import './App.css';
import Dice from './Components/Dice';
import { useState } from 'react';

function App() {
  const [numDice, setNumDice] = useState(1);
  const [diceVal, setDiceVal] = useState(Array.from({ length: Number(numDice) }, () => Math.floor(Math.random() * 6)));

  const setDiceNumber = (num) => {
    if(num > 10) {
      setNumDice(10);
      setDiceVal(Array.from({ length: Number(10) }, () => Math.floor(Math.random() * 6)));
    } else if(num < 1) {
      setNumDice(1);
      setDiceVal(Array.from({ length: Number(1) }, () => Math.floor(Math.random() * 6)));
    } else {
      setNumDice(num);
      setDiceVal(Array.from({ length: Number(num) }, () => Math.floor(Math.random() * 6)));
    }
  }  

  return (
    <div className="App">
      <header className="App-header">
        <h3>Dice Roller</h3>
        <input type="number" value={numDice} id="numDice" min="1" max="10" onChange={(v) => setDiceNumber(v.target.value)} />
        {
          diceVal.map((v,i) => <Dice val={v} key={i} />)
        }
        <button onClick={() => setDiceVal(Array.from({ length: Number(numDice) }, () => Math.floor(Math.random() * 6)))}>Roll Dice</button>
      </header>
    </div>
  );
}

export default App;
