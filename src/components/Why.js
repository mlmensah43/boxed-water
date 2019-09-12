import React from 'react';
import '../css/Why.css';

function Why() {
  return (
    <div className="">
        <div className="header-about">WHY BOXED WATER <br/> IS BETTER</div>
        {/* <div>
            <div className="subheader-about">THE<br/> FACTS</div>
        </div> */}

        <div className="subheader-about">THE<br/> PACKAGING</div>
        <div className="flex-container-row packaging">
            
            <img className="package-image" src={require('../images/package-image.png')} alt="facts"></img>
            <div className="">
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
    </div>
  );
}

export default Why;
