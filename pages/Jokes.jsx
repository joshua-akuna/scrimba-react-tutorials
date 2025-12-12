import Joke from '../components/Joke';
import jokeData from '../data/jokeData';

export default function Jokes() {
  const JokeElement = jokeData.map(function (joke) {
    return (
      <Joke key={joke.setup} setup={joke.setup} punchline={joke.punchline} />
    );
  });

  return <main className='jokes-container'>{JokeElement}</main>;
}

/* <Joke punchline="It's hard to explain puns to kleptomaniac because they take things literally" />
      <Joke
        setup='How did the hacker escape the police.'
        punchline='He just ransomware!'
      />
      <Joke
        setup="Why don't pirates travel on mountain road?"
        punchline='Scurvy.'
      />
      <Joke
        setup='Why do bees stay in the hive in winter?'
        punchline='Swarm.'
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      /> */
