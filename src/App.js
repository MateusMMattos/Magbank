import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js';
import CreditCard from './components/CreditCard.js';
import CardList from './components/CardList.js';
import CenteredButton from './components/CenteredButton.js';
import Institutional from './components/institutional.js';
import './App.scss';

import posts from './data/posts';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton> Abra sua conta </CenteredButton>
      <Institutional />
    </div>
  );
}

export default App;
