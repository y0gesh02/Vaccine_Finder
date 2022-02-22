import React from 'react';
import Vaccine from './components/Vaccine.js'
import Nav from './components/Nav';

import './App.css';


function App() {
  return (
    <>
      <Nav/>
      <div className="Apps">
        <h1>Find Your Nearby Vaccination Center</h1>
      </div>
      <hr className="line"/>
      
      <Vaccine/>
      <a className="footer" target="_blank"  rel="noopener noreferrer" href="https://github.com/y0gesh02">Made By Yogesh Sakle</a>
    </>
  );
}

export default App;
