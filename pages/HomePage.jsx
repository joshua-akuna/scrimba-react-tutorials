import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/react-facts'>React Facts 1</Link>
          </li>
          <li>
            <Link to='/new-react-facts'>React Facts 2</Link>
          </li>
          <li>
            <Link to='/travel-journal'>Travel Journal</Link>
          </li>
          <li>
            <Link to='/props'>Props Tutorial</Link>
          </li>
          <li>
            <Link to={'/jokes'}>Jokes</Link>
          </li>
        </ul>
      </nav>
      <h1>This is the Home page</h1>
    </div>
  );
}
