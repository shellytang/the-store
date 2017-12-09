// export const ADD_ITEM = 'ADD_ITEM';

export function addToCart(item) {
  return {
    type: 'ADD_ITEM',
    payload: item,
  };
}