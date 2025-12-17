import { useEffect, useState } from 'react';

export default function WindowTrackerText() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // this is the callback function that runs
    // when an event is triggered
    function watchWindowWidth() {
      // use setWinowWidth anytime the resize event triggers
      console.log('resized');
      setWindowWidth(window.innerWidth);
    }

    // add a resize event listener to the window
    window.addEventListener('resize', watchWindowWidth);

    // window.removeEventListener()
    return function () {
      console.log('cleaning up');
      window.removeEventListener('resize', watchWindowWidth);
    };
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
}
