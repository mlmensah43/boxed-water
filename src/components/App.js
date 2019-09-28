import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import '../css/App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/cart" exact component={Cart} />
    </Router>
    
    
  );
}

export default App;
