import _ from 'lodash';
import { GET_ITEMS } from '../actions/index';

export default function(state={}, action) {
  switch(action.type) {
    case GET_ITEMS:
      return _.mapKeys(action.payload, 'id');
    default: return state;
  }
}
