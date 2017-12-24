import store from '../data/store.json';
import type from '../constants/'

export const GET_ITEMS = 'GET_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';

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