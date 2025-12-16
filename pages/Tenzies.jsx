import { useState } from 'react';
import Die from '../components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

export default function Tenzies() {
  // generates 10 numerical values representing a die face
  function generateAllNewDice() {
    console.log('Generating all new dice');
    return new Array(10).fill(0).map(function () {
      return {
        id: nanoid(),
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
      };
    });
  }

  const [dice, setDice] = useState(() => generateAllNewDice());

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  // use the setDice method to update the dice objects
  function rollDice() {
    if (!gameWon) {
      setDice((oldDice) =>
        oldDice.map(function (die) {
          return die.isHeld
            ? die
            : { ...die, value: Math.floor(Math.random() * 6 + 1) };
        })
      );
    } else {
      setDice(generateAllNewDice());
    }
  }

  // flips the value of the isHeld value for a Die component
  function hold(id) {
    setDice(function (oldDice) {
      return oldDice.map(function (die) {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  // creates an array of Die components
  const diceElements = dice.map(function (die) {
    return (
      <Die
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        handleClick={() => hold(die.id)}
      />
    );
  });

  return (
    <div className='tenzies-container'>
      {gameWon && <Confetti />}
      <main className='tenzies-wrapper'>
        <h1>Tenzies</h1>
        <p>
          Rolls until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        {/* displays 10 Die components on the UI */}
        <section className='dice'>{diceElements}</section>
        {/* displays a button */}
        <button onClick={rollDice} className='roll'>
          {gameWon ? 'New Game' : 'Roll'}
        </button>
      </main>
    </div>
  );
}
