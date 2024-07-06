import { Hero, Portfolio, Experience, Hobbies, Contact, Nav } from './components';
import React from 'react';
import { Element } from 'react-scroll';
import './index.css'

const App = () => {

  return (
    <div>
      <Nav />
      <Element name="Hero">
        <Hero />
      </Element>
      <Element name="Portfolio">
        <Portfolio />
      </Element>
      <Element name="Experience">
        <Experience />
      </Element>
      <Element name="Hobbies">
        <Hobbies />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
    </div>
  );
};

export default App;

// Illidan pic - https://sketchfab.com/3d-models/warglaive-of-azzinoth-6cfabd2b15b54d519702ae4d16cc507c