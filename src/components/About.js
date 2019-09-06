import React from 'react';
import '../css/About.css';

function About() {
  return (
    <div className="about">
        <div className="header-about">WHY BOXED WATER <br/> IS BETTER</div>
        <div>
            <div className="subheader-about">THE<br/> FACTS</div>
        </div>

        <div className="subheader-about">THE<br/> PACKAGING</div>
        <div className="flex-container packaging">
            
            <img className="package-image" src={require('../images/package-image.png')} alt="facts"></img>
            <div className="flex-container-column ">
                <p className="blue-square">Roughly three-quarters of each of our boxes is made of
                paper, fully recyclable and free of BPAs and phthalates.
                Our paper comes from well-managed forests which are
                continually being replanted to replace harvested trees,
                helping offset our carbon footprint and allowing us all
                to breathe easier.
                </p>

                <div>
                    <img className="fact-image" src={require('../images/fact-circle.png')} alt="facts"></img>
                </div>
            </div>
            
        </div>
        
        <div className="header-about">NO PLASTIC<br/> PLEDGE</div>
        <div>
            
            <div className="subheader-about">30 DAYS <br/> ZERO PLASTIC<br/> BOTTLES</div>
            <div className="flex-container-column">
                <div>
                    <img className="pledge-image" src={require('../images/pledge.png')} alt="facts"></img>
                </div>
                <p className=" paragraph pledge">Plastic bottles are filling our earth and oceans at an alarming rate.<br/>
                1500 plastic bottles are sent to landfills every second.<br/> 
                At Boxed Water, we’ve had enough—and hope you feel the same.<br/> 
                By taking the No-Plastic Pledge, you’ll be joining the movement<br/>
                against plastic bottle consumption and doing your part for a<br/> 
                #BetterPlanet.
                </p>
            </div>
            
        </div>

        <div>
            <div className="subheader-about">ORDER<br/> YOUR GEAR</div>
            <div className="flex-container">
                <img className="pledge-merch-image" src={require('../images/pledge-merch.jpg')} alt="facts"></img>
                
                <p className="paragraph pledge-merch">Tell all your friends that you're giving up plastic bottles. 
                    We've put together our favorite merch in the ultimate pledge pack with a t-shirt, bracelet, 
                    stickers, and tote bag.
                </p>
            </div>
            
        </div>

        <div>
        <div className="header-about">ABOUT<br/> US</div>
                <div>
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
                </div>

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

        <div>
        <div className="header-about">BLOG</div>

        </div>

        
    </div>
  );
}

export default About;
