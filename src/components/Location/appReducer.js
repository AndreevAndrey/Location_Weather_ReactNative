const SET_LOCATION = 'GET_LOCATION';
const SET_HISTORY = 'SET_HISTORY';

const FETCH_WEATHER = 'FETCH_WEATHER';
const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

const initialState = {
  mapRegion: null,
  history: [],
  lastLat: null,
  lastLong: null,
  temperature: null,
  weather: null,
  isFetching: false,
  error: ''
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION: {
      return {
        ...state,
        mapRegion: action.mapRegion,
        lastLat: action.lat,
        lastLong: action.long
      }
    }
    case SET_HISTORY: {
      return {
        ...state,
        history: [...state.history, action.payload]
      }
    }
    case FETCH_WEATHER: {
      return {
        ...state,
        isFetching: true
      }
    }
    case FETCH_WEATHER_SUCCESS: {
      return {
        ...state,
        temperature: action.temperature,
        weather: action.weather,
        isFetching: false
      }
    }
    case FETCH_WEATHER_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    }
    default:
      return state
  }
};

export const setLocation = (mapRegion, lat, long) => ({ type: SET_LOCATION, mapRegion, lat, long });
export const setHistory = payload => ({ type: SET_HISTORY, payload });
export const fetchWeather = () => ({ type: FETCH_WEATHER });
export const fetchWeatherSuccess = (temperature, weather) => ({ type: FETCH_WEATHER_SUCCESS, temperature, weather });
export const fetchWeatherFailure = error => ({ type: FETCH_WEATHER_FAILURE, error });

export default appReducer;
