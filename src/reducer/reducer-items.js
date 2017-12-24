import type from '../constants/index';
import _ from 'lodash';

export default function(state={}, action) {
  switch(action.type) {
    case type.GET_ITEMS:
      return _.mapKeys(action.payload, 'id');
    default: return state;
  }
}
