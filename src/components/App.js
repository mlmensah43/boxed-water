import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import NotFound from './NotFound'
import '../css/App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/cart" exact component={Cart} />
        <Route exact component={NotFound} />
      </Switch>    
    </Router>
    
    
  );
}

export default App;
