import React from 'react';
import Nav from './Nav';
import '../css/Home.css';

function Home() {
  return (
    <div className="home">
        {/* <img className="home-background" src={require('../images/Main.jpg')} alt="home"></img> */}
        <Nav></Nav>
        <div className="promo-home">
            <h2 className="promo-title-home">BETTER PACKAGING <br/>BETTER PLANET</h2>
            <p>Single-use plastic bottles are filling our landfills,<br/>
             polluting our oceans, and affecting our earth. Choose<br/>
              the paper-based alternative of Boxed Water<br/>
               and make a difference.
            </p>
        </div>
        <div className="flex-container social">
            <span className="hashtag">#BETTERPLANET</span>
            <div className="social-media-icons">
                <span>
                    <img className="home-background" src={require('../images/facebook.svg')} alt="facebook"></img>
                </span>
                <span>
                    <img className="social-media-icon" src={require('../images/instagram.svg')} alt="instagram"></img>
                </span>
                <span>
                    <img className="social-media-icon" src={require('../images/twitter.svg')} alt="twitter"></img>
                </span>
            </div>
        </div>
    </div>
  );
}

export default Home;
