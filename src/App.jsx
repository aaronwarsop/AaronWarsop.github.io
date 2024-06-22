import { Hero, Portfolio, Experience, Contact, Nav } from './components';
import React from 'react';
import './App.css'

function App() {

  return (
    <div>
      <Nav />
      <Hero />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;