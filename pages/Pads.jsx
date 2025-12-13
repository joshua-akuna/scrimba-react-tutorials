import { useState } from 'react';
import padData from '../data/pads';

export default function Pads() {
  const [pads, setPads] = useState(padData);

  const padElements = pads.map((pad) => <button key={pad.id}></button>);

  return <main className='pads'>{padElements}</main>;
}
