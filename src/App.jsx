import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ReactFacts1 from '../pages/ReactFacts1';
import ReactFacts2 from '../pages/ReactFacts2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/react-facts' element={<ReactFacts1 />} />
        <Route path='/new-react-facts' element={<ReactFacts2 />} />
      </Routes>
    </Router>
  );
}

export default App;
