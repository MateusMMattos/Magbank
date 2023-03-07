import React from 'react';
import Hero from '../components/Hero.js';
import CreditCard from '../components/CreditCard.js';
import CardList from '../components/CardList.js';
import CenteredButton from '../components/CenteredButton.js';
import Institutional from '../components/institutional.js';
import Faq from '../components/FAQ.js';

import posts from '../data/posts';

const Home = ({ handleCLick}) => (
    
    <>
      <Hero onClick={handleCLick}/>
      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton onClick={handleCLick}> Abra sua conta </CenteredButton>
      <Institutional onClick={handleCLick}/>
      <Faq />
    </>
  );


export default Home;