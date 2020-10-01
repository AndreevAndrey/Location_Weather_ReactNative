import WeatherApi from '../utils/weatherApi';

const RequestApi = {
  GET_WEATHER: (lat, lon) => `?lat=${lat}&lon=${lon}&APPID=${WeatherApi.KEY}&units=metric`
};

export default RequestApi;


