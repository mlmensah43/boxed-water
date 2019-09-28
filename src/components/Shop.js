import React from 'react';
import Nav from './Nav';
import '../css/Shop.css';

const addSmall = () =>{
  let num = sessionStorage.getItem('small');
  if(num >= 15){
    alert("You may only purchase 15 packs of each size in one shipment");
    return
  }
  num++;
  sessionStorage.setItem('small', num);
  getSubtotal();
};

const addMedium = () => {
  let num = sessionStorage.getItem('medium');
  if(num >= 15){
    alert("You may only purchase 15 packs of each size in one shipment");
    return
  }
  num++;
  sessionStorage.setItem('medium', num);
  getSubtotal();
};

const addLarge = () => {
  let num = sessionStorage.getItem('large');
  if(num >= 15){
    alert("You may only purchase 15 packs of each size in one shipment");
    return
  }
  num++;
  sessionStorage.setItem('large', num);
  getSubtotal();
};

const getSubtotal = () =>{
  let s = sessionStorage.getItem('small') * 13.42;
  let m = sessionStorage.getItem('medium') * 24.74;
  let l = sessionStorage.getItem('large') * 35.74;
  let subtotal = s + m + l;
  

  sessionStorage.setItem('total', parseFloat(subtotal).toFixed(2));
};

function Shop() {

    return (
      <div className="shop">
          <Nav></Nav>
          <div className="flex-container-row shop-row">

            <div className="flex-container-column option-column">
              <img className="shop-image" src={require('../images/small.png')} alt="250"></img>
              <div>200ML</div>
              <button onClick={addSmall} className="add-button">add to cart</button>
            </div>

            <div  className="flex-container-column option-column">
              <img className="shop-image" src={require('../images/medium.png')} alt="500"></img>
              <div>500ML</div>
              <button onClick={addMedium} className="add-button">add to cart</button>
            </div>
            
            <div className="flex-container-column option-column">
              <img className="shop-image" src={require('../images/large.png')} alt="liter"></img>
              <div>1 LITER</div>
              <button onClick={addLarge} className="add-button">add to cart</button>
            </div>
          </div>

          <div className="flex-container-row subheader shop-subheader">CHOOSE A SIZE</div>
          
      </div>
    );
}

export default Shop;
