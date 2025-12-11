import { useState } from 'react';
import Avatar from '../public/images/avatar.png';
import { FaRegStar, FaStar } from 'react-icons/fa6';

export default function ContactCard() {
  const [contact, setContact] = useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (212) 555-1212',
    email: 'itsmyrealname.example.com',
    isFavorite: false,
  });

  const starIcon = contact.isFavorite ? (
    <FaStar className='filled-star' />
  ) : (
    <FaRegStar className='empty-star' />
  );

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
            <button
              onClick={toggleFavorite}
              aria-pressed={contact.isFavorite}
              aria-label={
                contact.isFavorite
                  ? 'Remove from favorites'
                  : 'Add to favorites'
              }
            >
              {starIcon}
              {/* <FaRegStar className='empty-star' /> */}
            </button>
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
