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
    default:
      return state;
  }
}
