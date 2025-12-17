import { useState } from 'react';
import WindowTrackerText from '../components/WindowTrackerText';

export default function WindowTracker() {
  const [show, setShow] = useState(true);

  function toggleShow() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <main className='tracker-wrapper'>
      <button onClick={toggleShow}>Toggle Window Tracker</button>
      {show && <WindowTrackerText />}
    </main>
  );
}
