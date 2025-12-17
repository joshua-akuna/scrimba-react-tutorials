import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className='nav-wrapper'>
      <nav>
        <ul className='pages'>
          <li className='page'>
            <Link to={'/'}>Home</Link>
          </li>
          <li className='page'>
            <Link to={'/react-facts'}>React Facts 1</Link>
          </li>
          <li className='page'>
            <Link to={'/new-react-facts'}>React Facts 2</Link>
          </li>
          <li className='page'>
            <Link to={'/travel-journal'}>Travel Journal</Link>
          </li>
          <li className='page'>
            <Link to={'/props'}>Props Tutorial</Link>
          </li>
          <li className='page'>
            <Link to={'/jokes'}>Jokes</Link>
          </li>
          <li className='page'>
            <Link to={'/turtles'}>Turtles</Link>
          </li>
          <li className='page'>
            <Link to={'/claude'}>Chef Claude</Link>
          </li>
          <li className='page'>
            <Link to={'/click'}>Click Me</Link>
          </li>
          <li className='page'>
            <Link to={'/state'}>State Variables</Link>
          </li>
          <li className='page'>
            <Link to={'/count'}>See Counter</Link>
          </li>
          <li className='page'>
            <Link to={'/ternary'}>Ternary Page</Link>
          </li>
          <li className='page'>
            <Link to={'/card'}>Contact Card</Link>
          </li>
          <li className='page'>
            <Link to={'/form'}>Form</Link>
          </li>
          <li className='page'>
            <Link to={'/messages'}>Messages</Link>
          </li>
          <li className='page'>
            <Link to={'/pads'}>Pads</Link>
          </li>
          <li className='page'>
            <Link to={'/meme'}>Memes Generator</Link>
          </li>
          <li className='page'>
            <Link to={'/starwars'}>StarWars</Link>
          </li>
          <li className='page'>
            <Link to={'/tracker'}>Window Tracker</Link>
          </li>
          <li className='page'>
            <Link to={'/tenzies'}>Tenzies</Link>
          </li>
        </ul>
      </nav>
      <h1>This is the Home page</h1>
    </div>
  );
}
