import Icon from '/images/trollface.png';

export default function MemeHeader() {
  return (
    <header className='meme-header'>
      <div className='meme-icon'>
        <img src={Icon} alt={'meme generator icon'} />
      </div>
      <h2>Meme Generator</h2>
    </header>
  );
}
