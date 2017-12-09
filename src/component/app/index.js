import './app.css';
import React, { Component } from 'react';
import ItemList from '../item-list/index.js';
import ShoppingCart from '../shopping-cart/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ItemList />
        <ShoppingCart />
      </div>
    );
  }
}

export default App;
