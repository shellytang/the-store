export default function(state=[], action) {
  console.log('ACTION: ', action);
  console.log('STATE: ', state);
  console.log('what: ', action.type);
  console.log('action payload: ', action.payload);
  switch(action.type) {
    case 'ADD_ITEM':
      return [action.payload, ...state];
    default:
      return state;
  }
}