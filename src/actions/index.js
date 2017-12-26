import store from '../data/store.json';
import type from '../constants/';

export const getItems = () => {
  return {
    type: type.GET_ITEMS,
    payload: store
  };
}

export const addToCart = (item, itemQty, id) => {
  return {
    type: type.ADD_ITEM,
    payload: item
  };
}

export const updateQty = (quantity, id) => {
  // let itemQty = [id, quantity];
  let itemQty = {[id]: quantity}
  return {
    type: type.SET_QUANTITY,
    payload: itemQty
  };
}

export const removeItem = (item) => {
  return {
    type: type.REMOVE_ITEM,
    payload: item
  }
}

export const checkout = (cart) => {
  return {
    type: type.CHECKOUT,
    payload: cart
  }
}