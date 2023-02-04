import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js';
import CreditCard from './components/CreditCard.js';
// import CardList from './components/CardList.js';
// import CenteredButton from './components/CenteredButton.js';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CreditCard />
    </div>
  );
}

export default App;
