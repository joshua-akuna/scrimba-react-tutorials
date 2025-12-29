import { useState } from 'react';
import Avatar from '/images/avatar.png';
import Props from './Props';
import Star from '../components/Star';

export default function ContactCard() {
  const [contact, setContact] = useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (212) 555-1212',
    email: 'itsmyrealname.example.com',
    isFavorite: false,
  });

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <main>
      <section className='cards'>
        <article className='card'>
          <img src={Avatar} alt='' />
          <div className='info'>
            <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
            <h2>
              {contact.firstName} {contact.lastName}
            </h2>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </div>
        </article>
      </section>
    </main>
  );
}
