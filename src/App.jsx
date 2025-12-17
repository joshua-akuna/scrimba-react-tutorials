import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ReactFacts1 from '../pages/ReactFacts1';
import ReactFacts2 from '../pages/ReactFacts2';
import Journal from '../pages/TravelJournal';
import Props from '../pages/Props';
import Jokes from '../pages/Jokes';
import Turtles from '../pages/Turtles';
import Claude from '../pages/ChefClaude';
import ClickMe from '../pages/ClickMe';
import State from '../pages/State';
import Counter from '../pages/Counter';
import Ternary from '../pages/Ternary';
import ContactCard from '../pages/ContactCard';
import FormPage from '../pages/Form';
import Messages from '../pages/Messages';
import Pads from '../pages/Pads';
import Meme from '../pages/Meme';
import StarWars from '../pages/StarWars';
import Tenzies from '../pages/Tenzies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/react-facts' element={<ReactFacts1 />} />
        <Route path='/new-react-facts' element={<ReactFacts2 />} />
        <Route path='/travel-journal' element={<Journal />} />
        <Route path='/props' element={<Props />} />
        <Route path='/jokes' element={<Jokes />} />
        <Route path='/turtles' element={<Turtles />} />
        <Route path='/claude' element={<Claude />} />
        <Route path='/click' element={<ClickMe />} />
        <Route path='/state' element={<State />} />
        <Route path='/count' element={<Counter />} />
        <Route path='/ternary' element={<Ternary />} />
        <Route path='/card' element={<ContactCard />} />
        <Route path='/form' element={<FormPage />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/pads' element={<Pads />} />
        <Route path='/starwars' element={<StarWars />} />
        <Route path='/meme' element={<Meme />} />
        <Route path='/tenzies' element={<Tenzies />} />
      </Routes>
    </Router>
  );
}

export default App;
