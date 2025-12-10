import { useState } from 'react';

export default function State() {
  const [result, setResult] = useState('Yes');

  function handleClick() {
    setResult('Heck Yes!');
  }

  return (
    <main className='state-main'>
      <h1>Is state important to know?</h1>
      <button onClick={handleClick}>{result}</button>
    </main>
  );
}
