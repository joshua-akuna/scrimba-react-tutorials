export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? '#59E391' : 'white',
  };

  // return a Die component
  return (
    <button style={styles} className='die' onClick={props.handleClick}>
      {props.value}
    </button>
  );
}
