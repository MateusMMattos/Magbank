import React, { useState } from 'react';

import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js';
import CreditCard from './components/CreditCard.js';
import CardList from './components/CardList.js';
import CenteredButton from './components/CenteredButton.js';
import Institutional from './components/institutional.js';
import Faq from './components/FAQ.js';
import Footer from './components/Footer.js';
import AccountModal from './components/AccountModal.js';

import './App.scss';

import posts from './data/posts';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Navbar handCreateAcc={() => setShowModal(true)}/>
      <Hero onClick={() => setShowModal(true)}/>
      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton onClick={() => setShowModal(true)}> Abra sua conta </CenteredButton>
      <Institutional onClick={() => setShowModal(true)}/>
      <Faq />
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)}/>
    </div>
  );
}

export default App;
