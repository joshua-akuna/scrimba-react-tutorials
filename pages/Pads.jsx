import { useState } from 'react';
import padData from '../data/pads';
import Pad from '../components/Pad';

export default function Pads() {
  const [pads, setPads] = useState(padData);

  const padElements = pads.map((pad) => <Pad key={pad.id} color={pad.color} />);

  return <main className='pads'>{padElements}</main>;
}
