import { useEffect, useState } from 'react';
import { FcPicture } from 'react-icons/fc';

export default function MemeMain() {
  const [meme, setMeme] = useState({
    topText: 'ONE DOES NOT SIMPLY',
    bottomText: 'WALK INTO MORDOR',
    imageUrl: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function getMemeUrl(event) {
    // prevents the default behaviour of the form
    event.preventDefault();
    // gets a random number
    const randomNum = Math.floor(Math.random() * allMemes.length);
    // gets a random new meme url
    const newMemeUrl = allMemes[randomNum].url;
    // update the meme o
    setMeme((oldMeme) => {
      return {
        ...oldMeme,
        imageUrl: newMemeUrl,
      };
    });
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
          <button onClick={getMemeUrl} type='submit'>
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
