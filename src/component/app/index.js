import './app.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemContainer from '../../container/item-container/index';
import ShoppingCartContainer from '../../container/shopping-cart-container/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ItemContainer} /> 
            <Route exact path='/cart' component={ShoppingCartContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
