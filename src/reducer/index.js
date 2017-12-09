import { combineReducers } from 'redux';
import itemsReducer from './reducer-items';
import ActiveItem from './reducer-active-item';
import ShoppingCart from './reducter-shopping-cart';

const rootReducer = combineReducers({
  items: ItemsReducer,
  activeItem: ActiveItem,
  cart: ShoppingCart,
});

export default rootReducer;
