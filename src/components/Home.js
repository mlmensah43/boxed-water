import React from 'react';
import Landing from './Landing.js';
import Why from './Why';
import Pledge from './Pledge';
import About from './About';
import Footer from './Footer';

function Home() {
  return (
    <div >
        <Landing></Landing>
        <Why></Why>
        <Pledge></Pledge>
        <About></About>
        <Footer></Footer>
    </div>
  );
}

export default Home;
