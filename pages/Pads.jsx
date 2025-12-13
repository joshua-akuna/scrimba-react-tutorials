import { useState } from 'react';
import padData from '../data/pads';
import Pad from '../components/Pad';

export default function Pads() {
  const [pads, setPads] = useState(padData);

  function toggle(id) {
    setPads((prevPads) =>
      prevPads.map(function (item) {
        return item.id === id ? { ...item, on: !item.on } : item;
      })
    );
  }

  const padElements = pads.map((pad) => (
    <Pad
      key={pad.id}
      id={pad.id}
      color={pad.color}
      handleClick={toggle}
      on={pad.on}
    />
  ));

  return <main className='pads'>{padElements}</main>;
}
