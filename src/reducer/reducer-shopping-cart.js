import type from '../constants/index';

const initialState = {
  itemIds: [],
  quanityById: {}
}

export default (state=initialState.itemIds, action) => {
  switch(action.type) {
    case type.ADD_ITEM:;
    let { payload } = action;
      if(state.indexOf(payload.id) !== -1) {
        return state;
      }
      return [...state, payload.id];
    default: 
      return state;
  }
}
