import store from '../data/store.json';

export const GET_ITEMS = 'GET_ITEMS';
export function getItems() {
  return {
    type: GET_ITEMS,
    payload: store,
  };
}
