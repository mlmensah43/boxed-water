import React from 'react';
import Nav from './Nav';
import '../css/Shop.css';

const addSmall = () =>{
  let num = localStorage.getItem('small');
  num++;
  localStorage.setItem('small', num);
  getSubtotal();
};

const addMedium = () => {
  let num = localStorage.getItem('medium');
  num++;
  localStorage.setItem('medium', num);
  getSubtotal();
};

const addLarge = () => {
  let num = localStorage.getItem('large');
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
          <button onClick={addSmall} className="add-button small">add to cart</button>
          <button onClick={addMedium} className="add-button medium">add to cart</button>
          <button onClick={addLarge} className="add-button large">add to cart</button>
      </div>
    );
}

export default Shop;
