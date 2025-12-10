import { useState } from 'react';

export default function State() {
  //   const isGoingOut = false;

  const [isGoingOut, setIsGoingOut] = useState(false);
  let answer = isGoingOut ? 'Yes' : 'No';

  function handleClick() {
    setIsGoingOut(function (prevState) {
      return !prevState;
    });
  }

  return (
    <main className='state-main'>
      <h1>Do I feel like going out tonight?</h1>
      <button onClick={handleClick}>{answer}</button>
    </main>
  );
}
