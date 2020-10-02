import { GeocodingApi, WeatherApi } from './api';

const RequestApi = {
  GET_WEATHER: (lat, long) => `?lat=${lat}&lon=${long}&APPID=${WeatherApi.KEY}&units=metric`,
  GET_ADDRESS: (lat,long) => `?apiKey=${GeocodingApi.KEY}&mode=retrieveAddresses&prox=${lat},${long}`
};

export default RequestApi;


