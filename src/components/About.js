import React from 'react';
import '../css/About.css';

function About() {
  return (
    <div className="about">
        
        
        

        <div>
        <div className="header-about">ABOUT<br/> US</div>
                {/* <div>
                    <div className="subheader-about">FINDING A<br/> BETTER WAY</div>
                    
                    <p className="paragraph description">Part sustainable water company, part philanthropic project.<br/> 
                    We obsess over providing the purest water in the most sustainable <br/> 
                    way. We’re not satisfied with the status quo - our planet doesn’t <br/> 
                    need more plastic bottles. We’re constantly finding new ways to <br/> 
                    make a positive impact for our planet.
                    </p>
                    
                    <hr></hr>
                    </div>
                    
                    <div>
                </div> */}

                <div>
                    <div className="subheader-about">OUR<br/> TEAM</div>
                        <p className="paragraph description">
                            Giving back to the planet is more than just a company philosophy.<br/> 
                            For our employees, it’s personal. Together, the Boxed Water team<br/>
                            is working toward a shared goal of creating a better tomorrow by<br/> 
                            creating more sustainable solutions today.
                        </p>

                        <img className="team-image" src={require('../images/team.png')} alt="facts"></img>

                </div>

                <div>
                    <div className="subheader-about">OUR<br/> FACILATIES</div>

                    <p className="paragraph description">
                        Boxed Water’s filling locations are strategically placed to allow us to<br/> 
                        serve a wide variety of locations while keeping our carbon footprint down.<br/>
                        Location is everything. To keep up with the growing demand for Boxed Water,<br/>
                        we carefully chose our filling locations so we can reach more areas with a<br/> 
                        minimal carbon footprint.
                    </p>

                    <img className="team-image" src={require('../images/our-facilities.png')} alt="facts"></img>
                </div>

        </div>

        {/* <div>
        <div className="header-about">BLOG</div>

        </div> */}

        
    </div>
  );
}

export default About;
