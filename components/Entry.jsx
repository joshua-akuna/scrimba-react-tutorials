import { FaLocationDot } from 'react-icons/fa6';

export default function Entry(props) {
  console.log(props);

  return (
    <article className='entry-wrapper'>
      <div className='image-wrapper'>
        <img src={props.img.src} alt={props.img.alt} />
      </div>
      <div className='detail-wrapper'>
        <div>
          <FaLocationDot />
          <span>{props.country}</span>
          <a href={props.googleMapLink}>View on Google Maps</a>
        </div>
        <h2>{props.title}</h2>
        <p>{props.dates}</p>
        <p>{props.text}</p>
      </div>
    </article>
  );
}
