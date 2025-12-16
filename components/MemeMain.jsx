import { useState } from 'react';
import { FcPicture } from 'react-icons/fc';

export default function MemeMain() {
  const [meme, setMeme] = useState({
    topText: 'ONE DOES NOT SIMPLY',
    bottomText: 'WALK INTO MORDOR',
    imageUrl: 'http://i.imgflip.com/1bij.jpg',
  });

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main className='meme-container'>
      <div className='form-container'>
        <form className='meme-form'>
          <label htmlFor='top-text'>
            Top Text:
            <input
              type='text'
              name='topText'
              id='top-text'
              placeholder='One does not simply'
              onChange={handleChange}
              value={meme.topText}
            />
          </label>
          <label htmlFor='bottom-text'>
            Bottom Text:
            <input
              type='text'
              name='bottomText'
              id='bottom-text'
              placeholder='walk into Mordor'
              onChange={handleChange}
              value={meme.bottomText}
            />
          </label>
          <button type='submit'>
            Get a new meme image <FcPicture className='meme-picture' />
          </button>
        </form>
      </div>
      <div className='meme'>
        <img src={meme.imageUrl} alt='' />
        <span className='top meme-text'>{meme.topText}</span>
        <span className='bottom meme-text'>{meme.bottomText}</span>
      </div>
    </main>
  );
}
