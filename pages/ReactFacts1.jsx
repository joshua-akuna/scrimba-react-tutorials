import Header from '../components/Header1';
import MainContent from '../components/MainContent1';
import Footer from '../components/Footer1';

export default function ReactFacts1() {
  return (
    <div className='facts'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function TemporaryName() {
  return (
    <main className='react react-facts'>
      <img src='react-logo.svg' alt='react logo' width='40px' />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walker</li>
        <li>Has well over 200k stars on Github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}
