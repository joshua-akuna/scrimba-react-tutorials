export default function ClickMe() {
  function handleClick() {
    console.log('I was clicked');
  }

  function handleMouseOver() {
    console.log('Mouse Hovered');
  }

  return (
    <main className='click-main'>
      <img
        src='https://picsum.photos/640/360'
        alt='placeholder image for picsum'
        onMouseOver={handleMouseOver}
      />
      <button onClick={handleClick}>Click me</button>
    </main>
  );
}
