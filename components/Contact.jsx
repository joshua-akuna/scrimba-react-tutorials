import { FaPhone } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

export default function Contact() {
  return (
    <article className='contact-card'>
      <img src='/images/mr-whiskerson.jpeg' alt='photo of Mr Whiskerson' />
      <h3>Mr. Whiskerson</h3>
      <div className='info-group'>
        <FaPhone className='icon' />
        <p>(212) 555-1234</p>
      </div>
      <div className='info-group'>
        <MdMail className='icon' />
        <p>mr.whiskaz@catnap.meow</p>
      </div>
    </article>
  );
}
