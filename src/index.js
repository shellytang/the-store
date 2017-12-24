import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducer/index';
import App from './component/app/index';
import Item from './container/item/index';
import Cart from './container/shopping-cart/index';
import { getItems } from './actions/index';

const store = createStore(
  reducers,
  applyMiddleware(promise)
);

store.dispatch(getItems()); //dispatch action that pulls the items data and updates state return an object with id as keys.

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/products/:id' component={Item} />
        <Route path='/cart' component={Cart} />
        <Route path='/' component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();


