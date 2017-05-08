export default function reducer(state = 0, action) {
  if (action.type === 'add') {
    return state + 1;
  } else if (action.type === 'subtract') {
    return state - 1;
  } else {
    return state;
  }
}
