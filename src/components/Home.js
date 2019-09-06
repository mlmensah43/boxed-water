import React from 'react';
import Nav from './Nav';
import About from './About';
import '../css/Home.css';

function Home() {
  return (
    <div className="home">
        <Nav></Nav>
        <div className="promo-home">
            <div className="col dots">
                <span className="dot 1"></span>
                <span className="dot 2"></span>
                <span className="dot 3"></span>
                <span className="dot 4"></span>
            </div>
            <h2 className="promo-title-home">BETTER PACKAGING <br/>BETTER PLANET</h2>
            <p className="promo-p">Single-use plastic bottles are filling our landfills, polluting<br/>
              our oceans, and affecting our earth. Choose the paper-<br/>
              based alternative of Boxed Water and make a difference.
            </p>
        </div>
        <div className="flex-container social">
            <span className="hashtag">#BETTERPLANET</span>
            <div className="social-media-icons">
                <span>
                    <a href="https://www.facebook.com/boxedwater">
                        <img className="social-media-icon" src={require('../images/facebook.svg')} alt="facebook"></img>
                    </a>
                </span>
                <span>
                    <a href="https://www.instagram.com/boxedwater/">
                        <img className="social-media-icon" src={require('../images/instagram.svg')} alt="instagram"></img>
                    </a>
                    
                </span>
                <span>
                    <a href="https://twitter.com/boxedwater">
                        <img className="social-media-icon" src={require('../images/twitter.svg')} alt="twitter"></img>
                    </a>
                    
                </span>
            </div>
        </div>
        <About></About>
    </div>
  );
}

export default Home;
