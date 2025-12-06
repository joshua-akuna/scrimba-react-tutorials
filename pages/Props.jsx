import Time from '../components/Time';
import Contact from '../components/Contact';

export default function Props() {
  return (
    <div className='contacts'>
      <Contact
        img='/images/mr-whiskerson.jpeg'
        name='Mr. Whiskerson'
        phone='(212) 555-1234'
        email='mr.whizkaz@catnap.meow'
      />
      <Contact
        img='/images/fluffykins.jpeg'
        name='Fluffykins'
        phone='(212) 555-2345'
        email='fluff@me.com'
      />
      <Contact
        img='/images/felix.jpeg'
        name='Felix'
        phone='(212) 555-4567'
        email='thecat@hotmail.com'
      />
      <Contact
        img='/images/pumpkin.jpeg'
        name='Pumpkin'
        phone='(0800) CAT KING'
        email='pumpkin@scrimba.com'
      />
    </div>
  );
}
