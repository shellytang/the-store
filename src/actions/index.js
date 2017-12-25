import store from '../data/store.json';
import type from '../constants/';

export const getItems = () => {
  return {
    type: type.GET_ITEMS,
    payload: store
  };
}

export const addToCart = (item) => {
  return {
    type: type.ADD_ITEM,
    payload: item
  };
}

export const removeItem = (item) => {
  return {
    type: type.REMOVE_ITEM,
    payload: item
  }
}