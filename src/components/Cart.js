import React from 'react';
import Nav from './Nav';
import '../css/Cart.css';

class Cart extends React.Component {

  state= {
    small: localStorage.getItem('small'),
    medium: localStorage.getItem('medium'),
    large: localStorage.getItem('large'),
    total: localStorage.getItem('total')
  }

  addSmall = () => {
    if(this.state.small === 15){
      alert("You may only purchase 15 packs of each size in one shipment");
      return
    }
    let num = localStorage.getItem('small');
    num++;
    localStorage.setItem('small', num);
    this.setState({small: num});
    this.getSubtotal();
  };

  removeSmall = () => {
    if(this.state.small === 0){
      return
    }
    let num = localStorage.getItem('small');
    num--;
    localStorage.setItem('small', num);
    this.setState({small: num});
    this.getSubtotal();
  };

  removeAllSmall = () => {
    localStorage.setItem('small', 0);
    this.setState({small: 0});
    this.getSubtotal();
  }

  addMedium = () => {
    if(this.state.medium === 15){
      alert("You may only purchase 15 packs of each size in one shipment");
      return
    }
    let num = localStorage.getItem('medium');
    num++;
    localStorage.setItem('medium', num);
    this.setState({medium: num});
    this.getSubtotal();
  };

  removeMedium = () => {
    if(this.state.medium === 0){
      return
    }
    let num = localStorage.getItem('medium');
    num--;
    localStorage.setItem('medium', num);
    this.setState({medium: num});
    this.getSubtotal();
  };

  removeAllMedium = () => {
    localStorage.setItem('medium', 0);
    this.setState({medium: 0});
    this.getSubtotal();
  }

  addLarge = () => {
    if(this.state.large === 15){
      alert("You may only purchase 15 packs of each size in one shipment");
      return
    }
    let num = localStorage.getItem('large');
    num++;
    localStorage.setItem('large', num);
    this.setState({large: num});
    this.getSubtotal();
  };

  removeLarge = () => {
    if(this.state.large === 0){
      return
    }
    let num = localStorage.getItem('large');
    num--;
    localStorage.setItem('large', num);
    this.setState({large: num});
    this.getSubtotal();
  };

  removeAllLarge = () => {
    localStorage.setItem('large', 0);
    this.setState({large: 0});
    this.getSubtotal();
  }


  getSubtotal(){
    let s = localStorage.getItem('small') * 13.42;
    let m = localStorage.getItem('medium') * 24.74;
    let l = localStorage.getItem('large') * 35.74;
    let subtotal = s + m + l;
    this.setState({total: parseFloat(Math.round(subtotal * 100) / 100).toFixed(2)});
    localStorage.setItem('total',subtotal);
  }

  renderSmall(){
    if(this.state.small > 0){
      return(
        <div className="details flex-container-row">
        <img className="cart-image" src={require('../images/250ML.jpg')} alt="250"></img>
        <div className="flex-container-column item-name">
          <span>250 mL Boxed Water 12 Pack<br/>$13.42</span>

          <div className="flex-container-row">
              <button onClick={this.removeAllSmall} className="remove">Remove</button>
              <div className="full-button">
                <button onClick={this.removeSmall} className="button-sign">-</button>
                <span className="vl vr">{this.state.small}</span>
                <button onClick={this.addSmall} className="button-sign">+</button>
              </div>
          </div>
          
        </div>
        
      </div>
      );
    }
  }

  renderMedium(){
    if(this.state.medium > 0){
    return(
      <div className="details flex-container-row">
      <img className="cart-image" src={require('../images/500ML.jpg')} alt="500"></img>
        <div className="flex-container-column item-name">
          <span>500 mL Boxed Water 12 Pack<br/>$24.74</span>

          <div className="flex-container-row">
            <button onClick={this.removeAllMedium} className="remove">Remove</button>
            <div className="full-button">
              <button onClick={this.removeMedium} className="button-sign">-</button>
              <span className="vl vr">{this.state.medium}</span>
              <button onClick={this.addMedium} className="button-sign">+</button>
            </div>
          </div>
        </div>
        
      </div>
    );
    }
  }


  renderLarge(){
    if(this.state.large > 0){
      return(
        <div className="details flex-container-row">
        <img className="cart-image" src={require('../images/1Liter.jpg')} alt="1Liter"></img>
          <div className ="flex-container-column item-name">
            <span>1 Liter Boxed Water 12 Pack<br/>$35.74</span>

            <div className="flex-container-row">
              <button onClick={this.removeAllLarge} className="remove">Remove</button>
              <div className="full-button ">
                <button onClick={this.removeLarge} className="button-sign">-</button>
                <span className="vl vr">{this.state.large}</span>
                <button onClick={this.addLarge} className="button-sign">+</button>
              </div>
            </div>
          </div>
        </div>
        );
    }
    
  }

  renderTotal(){
    if(this.state.total > 0){
      return(
        <div>
          <hr></hr>
          <div className="flex-container-row total">
            <div>Subtotal</div>
            <div className="total-num">${this.state.total}</div>
          </div>
            <span className="disclaimer">Shipping and taxes calculated at checkout</span>
        </div>
        
      );
    }

    return(
      <div className="empty">
        Cart is Empty!
      </div>
    );
  }

  render(){
    return(
      <div className="cart-background">
      <Nav></Nav>
        <div className="cart">

          {this.renderSmall()}
          {this.renderMedium()}
          {this.renderLarge()}
          {this.renderTotal()}

          

        </div>
      </div>
    );
  } 
}

export default Cart;
