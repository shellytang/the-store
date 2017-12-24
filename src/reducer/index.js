import { combineReducers } from 'redux';
import ItemsReducer from './reducer-items';
import CartReducer from './reducer-shopping-cart';

const rootReducer = combineReducers({
  items: ItemsReducer,
  cart: CartReducer
});

export default rootReducer;
