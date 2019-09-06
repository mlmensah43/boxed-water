import React from 'react';
import Nav from './Nav';
import '../css/Shop.css';

const addSmall = () =>{
  let num = localStorage.getItem('small');
  if(num >= 15){
    alert("You may only purchase 15 packs of each size in one shipment");
    return
  }
  num++;
  localStorage.setItem('small', num);
  getSubtotal();
};

const addMedium = () => {
  let num = localStorage.getItem('medium');
  if(num >= 15){
    alert("You may only purchase 15 packs of each size in one shipment");
    return
  }
  num++;
  localStorage.setItem('medium', num);
  getSubtotal();
};

const addLarge = () => {
  let num = localStorage.getItem('large');
  if(num >= 15){
    alert("You may only purchase 15 packs of each size in one shipment");
    return
  }
  num++;
  localStorage.setItem('large', num);
  getSubtotal();
};

const getSubtotal = () =>{
  let s = localStorage.getItem('small') * 13.42;
  let m = localStorage.getItem('medium') * 24.74;
  let l = localStorage.getItem('large') * 35.74;
  let subtotal = s + m + l;

  localStorage.setItem('total', subtotal);
};

function Shop() {

    return (
      <div className="shop">
          <Nav></Nav>
          <div className="flex-container drinks">
            <div className="column">
              <img src={require('../images/250ml-cap.jpg')} alt="250"></img>
              <button onClick={addSmall} className="add-button small">add to cart</button>
            </div>

            <div  className="column">
              <img src={require('../images/500ml-cap.jpg')} alt="500"></img>
              <button onClick={addMedium} className="add-button medium">add to cart</button>
            </div>
            
            <div className="column">
              <img src={require('../images/liter.jpg')} alt="liter"></img>
              <button onClick={addLarge} className="add-button large">add to cart</button>
            </div>
          </div>
          
          
      </div>
    );
}

export default Shop;
