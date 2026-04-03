import React from 'react';

import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Foryou from '../components/home/Foryou'

import '../style/home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Hero />
            <About />
            <Foryou />
        </div>
    );
};

export default Home;