import deepFreeze from 'deep-freeze'

export default function list (state, action) {
  if (typeof state === 'undefined') {
    return [];
  }
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
      case 'REMOVE':
        return state.filter(function (item) {
          return item.id !== action.id
        });
      case 'EDIT':
        return state.reduce(function (newState, item) {
          if (item.id === action.id) {
            item.text = action.text;
          }
          newState.push(item);
          return newState;
        }, []);
    default:
      return state;
  }
}
