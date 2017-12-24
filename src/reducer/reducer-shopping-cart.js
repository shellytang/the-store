import type from '../constants/index';

export default (state=null, action) => {
  switch(action.type) {
    case type.ADD_ITEM:
    let { payload } = action;
      return {...state, [payload.id]: payload};
    default: 
      return state;
  }
}
