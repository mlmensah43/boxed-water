import React from 'react';
import '../css/Home.css';

function Home() {
  return (
    <div className="Home">
        <div className="home-background">
            <img src={require("../images/Main.svg")} alt="home"></img>
        </div>
    </div>
  );
}

export default Home;
