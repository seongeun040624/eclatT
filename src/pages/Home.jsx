import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Foryou from '../components/home/Foryou';

import '../style/home.scss';

const Home = () => {
  return (
    <div className='home'>
      <section id="home-hero">
        <Hero />
      </section>

      <section id="home-about">
        <About />
      </section>

      <section id="home-foryou">
        <Foryou />
      </section>
    </div>
  );
};

export default Home;