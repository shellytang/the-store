import type from '../constants/index';

const initialState = {
  itemIds: [],
  quanityById: {}
}

export default (state=initialState.itemIds, action) => {
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


