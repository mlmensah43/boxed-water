import React from 'react';
import '../css/Pledge.css';

function Pledge() {
  return (
    <div className="">
        <div className="header-about">NO PLASTIC<br/> PLEDGE</div>
        <div>
            
            <div className="subheader-about">30 DAYS <br/> ZERO PLASTIC<br/> BOTTLES</div>
            <div className="flex-container-column pledge">
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
            <div className="flex-container-row">
                <img className="pledge-merch-image" src={require('../images/pledge-merch.jpg')} alt="facts"></img>
                
                <p className="paragraph pledge-merch">Tell all your friends that you're giving up plastic bottles. 
                    We've put together our favorite merch in the ultimate pledge pack with a t-shirt, bracelet, 
                    stickers, and tote bag.
                </p>
            </div>
            
        </div>
    </div>
  );
}

export default Pledge;
