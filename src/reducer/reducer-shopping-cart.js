import type from '../constants/index';

const initialState = {
  itemIds: [],
  quanityById: {}
}

export default (state=initialState.itemIds, action) => {
  switch(action.type) {
    case type.ADD_ITEM:
    console.log('STATE: ', state);
    let { payload } = action;
      // return {...state, [payload.id]: payload};
      return [...state, payload.id];
    default: 
      return state;
  }
}
