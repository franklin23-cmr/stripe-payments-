import React from 'react';
import './App.css';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Account from './Account';
import Cancel from './Cancel';
import Prices from './Prices';
// import Register from './Register';
import Subscribe from './Subscribe';
import Order from './Order';
import Checkout from './Checkout';
import Success from './components/Success';

function App(props) {
  return (
    <Switch>
      <Route exact path="/">
          <Order />      
        </Route>
      
      <Route path="/success" exact>
        <Success/>
      </Route>

       <Route path="/checkout" exact>
        <Checkout />
      </Route>

        <Route path="/cancel" exact>
        <Cancel />
      </Route>
      

      <Route path="/prices">
        <Prices />
      </Route>
      <Route path="/subscribe">
        <Subscribe />
      </Route>
      <Route path="/account">
        <Account />
      </Route>
    
    </Switch>
  );
}

export default App;
