import type from '../constants/index';

const initialState = {
  itemIds: [],
  quantityById: {}
}

const updateItems = (state=initialState.itemIds, action) => {
  let { payload } = action;
  switch(action.type) {
    case type.ADD_ITEM:
      if(state.indexOf(payload.id) !== -1) {
        return state;
      }
      return [...state, payload.id];
    case type.REMOVE_ITEM:
      return state.filter(id => {
        return id !== payload;
      }); 
    default: 
      return state;
  }
}

const setQuantity = (state = initialState.quantityById, action) => {
  let { payload } = action;
  switch (action.type) {
    case type.SET_QUANTITY:
      let id = Object.keys(payload);
      if (!state[id]) {
        return { ...state, [id]: payload[id] }
      } else {
        //remove item from state when 'remove' is clicked
        if (payload[id] === 0) {
            delete state[id];
            return state;
        } else {
          let updatedQty = state[id] += payload[id];
          state[id] = updatedQty;
          return state;
        }
      }
    default:
      return state;
  }
}

const cart = (state=initialState, action ) => {
  switch(action.type) {
    case type.CHECKOUT:
      return state;
    default: 
      return {
        itemIds: updateItems(state.itemIds, action),
        quantityById: setQuantity(state.quantityById, action)
      }
  }
}

export default cart;