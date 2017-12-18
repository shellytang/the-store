// export default function(state=[], action) {
//   console.log('ACTION: ', action.payload);
//   console.log('STATE: ', state);
//   switch(action.type) {
//     case 'ADD_ITEM':
//       let names = state.map(item => {
//         return item.name;
//       });
//       if(names.indexOf(action.payload.name) !== -1) {
//         return state;
//       }
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// }