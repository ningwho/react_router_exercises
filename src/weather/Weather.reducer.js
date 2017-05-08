const INITIAL_STATE = {
  name: 'Chicago',
  weatherData: null,
  isFetching: false
};

function reducer(state=INITIAL_STATE, action) {
  if (action.type === 'changeName') {
    return Object.assign({}, state, {
      name: action.value
    });
  } else if (action.type === 'weather_info') {
    return Object.assign({}, state, {
      weatherData: action.payload,
      isFetching: false,
      error: null
    });
  } else if (action.type === 'fetch_weather') {
    return Object.assign({}, state, {
      weatherData: null,
      isFetching: true,
      error: null
    });
  } else if (action.type === 'weather_error') {
    return Object.assign({}, state, {
      isFetching: false,
      error: action.error,
      weatherData: null
    });
  }
  return state;
}

export default reducer;
