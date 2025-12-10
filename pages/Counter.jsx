import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function minus() {
    setCount(function (prevCount) {
      return prevCount - 1;
    });
  }

  return (
    <main className='counter-wrapper'>
      <h1>How many times will Bob say "State" in this section</h1>
      <div className='counter'>
        <button className='minus' aria-label='Drecrease Count' onClick={minus}>
          -
        </button>
        <h2 className='count'>{count}</h2>
        <button onClick={add} className='plus' aria-label='Decrease count'>
          +
        </button>
      </div>
    </main>
  );
}
