import React from 'react';
import Nav from './Nav';
import '../css/Landing.css';

function Landing (){

    return(
        <div className="background">
            <Nav></Nav>
            <div className="landing">
                {/* <div className="flex-container-column dots">
                    <span className="dot 1"></span>
                    <span className="dot 2"></span>
                    <span className="dot 3"></span>
                    <span className="dot 4"></span>
                </div> */}
                <h2>BETTER PACKAGING <br/>BETTER PLANET</h2>
                <div className="flex-container-row landing-blue-square">
                    <p>Single-use plastic bottles are filling our landfills, polluting
                    our oceans, and affecting our earth. Choose the paper-
                    based alternative of Boxed Water and make a difference.
                    </p>
                </div>
                
            </div>

            <div className="flex-container-row social-media">

                <div className="hashtag">#BETTERPLANET</div>

                <div className="flex-container-row  social-media-icons">
                    <a href="https://www.facebook.com/boxedwater">
                        <img className="social-media-icon" src={require('../images/facebook.svg')} alt="facebook"></img>
                    </a>
                    <a href="https://www.instagram.com/boxedwater/">
                        <img className="social-media-icon" src={require('../images/instagram.svg')} alt="instagram"></img>
                    </a>
                    <a href="https://twitter.com/boxedwater">
                        <img className="social-media-icon" src={require('../images/twitter.svg')} alt="twitter"></img>
                    </a>
                </div>
            </div>
        </div>
    );


}

export default Landing;