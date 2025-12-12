import { useState } from 'react';

export default function Joke(props) {
  const [isShown, setIsShown] = useState(false);

  function toggleShown() {
    setIsShown((prevState) => !prevState);
  }

  return (
    <>
      {props.setup && <p className='setup'>Setup: {props.setup}</p>}
      {isShown && <p className='punchline'>PunchLine: {props.punchline}</p>}
      <button onClick={toggleShown}>
        {isShown ? 'Hide' : 'Show'} punchline
      </button>
      <hr />
    </>
  );
}
