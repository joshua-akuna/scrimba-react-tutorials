import { useState } from 'react';
import Die from '../components/Die';

export default function Tenzies() {
  const [diceValues, setDiceValues] = useState(generateAllNewDice);

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.floor(Math.random() * 6 + 1));
  }

  const diceElements = diceValues.map((dieValue) => <Die value={dieValue} />);

  function rollDice() {
    setDiceValues(generateAllNewDice);
  }

  return (
    <div className='tenzies-container'>
      <main className='tenzies-wrapper'>
        {/* displays 10 Die components on the UI */}
        <section className='dice'>{diceElements}</section>
        {/* displays a button */}
        <button onClick={rollDice} className='roll'>
          Roll
        </button>
      </main>
    </div>
  );
}
