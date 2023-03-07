import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js';
import AccountModal from './components/AccountModal.js';

import './App.scss';

import Home from './views/Home.js';
import Login from './views/Login.js';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar handCreateAcc={() => setShowModal(true)}/>

      <Routes>
        <Route path='/' element={<Home handleCLick={() => setShowModal(true)}/>} /> 
        <Route path='/login' element={<Login/>} />

      </Routes>

      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)}/>
    </>
  );
}

export default App;
