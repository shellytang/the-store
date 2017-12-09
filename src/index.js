import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import promise from 'redux-promise';
// import reducers from './reducer';
import App from './component/app/index';
import registerServiceWorker from './registerServiceWorker';

// const createStoreWithMiddleWare = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
