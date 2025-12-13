import { FaRegStar, FaStar } from 'react-icons/fa6';

export default function Star(props) {
  const starIcon = props.isFilled ? (
    <FaStar className='filled-star' />
  ) : (
    <FaRegStar className='empty-star' />
  );

  return (
    <button
      onClick={props.handleClick}
      aria-pressed={props.isFilled}
      aria-label={props.isFilled ? 'Remove from favorites' : 'Add to favorites'}
    >
      {starIcon}
    </button>
  );
}
