import { FaPhone } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

export default function Contact(props) {
  return (
    <article className='contact-card'>
      <img src={props.img} alt='photo of Mr Whiskerson' />
      <h3>{props.name}</h3>
      <div className='info-group'>
        <FaPhone className='icon' />
        <p>{props.phone}</p>
      </div>
      <div className='info-group'>
        <MdMail className='icon' />
        <p>{props.email}</p>
      </div>
    </article>
  );
}
