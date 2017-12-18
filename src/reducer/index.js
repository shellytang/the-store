import { combineReducers } from 'redux';
import ItemsReducer from './reducer-items';
// import ActiveItem from './reducer-active-item';
// import ShoppingCart from './reducer-shopping-cart';

const rootReducer = combineReducers({
  items: ItemsReducer,
  // activeItem: ActiveItem,
  // cart: ShoppingCart,
});

export default rootReducer;
