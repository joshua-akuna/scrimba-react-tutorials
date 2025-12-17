import { useEffect, useState } from 'react';
import { data } from 'react-router-dom';

export default function StarWars() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1);
  // 1. GET the data
  // 2. Save the data in state

  function handleClick() {
    setCount((oldValue) => oldValue + 1);
  }

  //   side effects -> useEffect
  useEffect(() => {
    console.log('Effect Ran');
    // fetches data from the starwars api
    fetch(`https://swapi.info/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data))
      .catch((error) => console.error(`Error: ${error}`));
  }, [count]);

  // get an array of memes when the UI loads
  //   useEffect(() => {
  //     console.log('Effect function ran');
  //   }, [count]);

  console.log('Renedered');

  return (
    <div className='star-wars'>
      <h1>The count is {count}</h1>
      <button className='roll' onClick={handleClick}>
        Get Next Character
      </button>
      {/* <pre>{JSON.stringify({ name: 'Luke' }, null, 2)}</pre> */}
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
