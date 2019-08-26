import React from 'react';
import Pic from '../images/Main.svg';
import '../css/Home.css';

function Home() {
  return (
    <div className="Home">
        <div className="home-background">
            <image src={Pic} alt="home"></image>
        </div>
    </div>
  );
}

export default Home;
