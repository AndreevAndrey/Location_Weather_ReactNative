import { fetchWeather, fetchWeatherFailure, fetchWeatherSuccess } from '../appReducer';
import axios from 'axios';
import weatherInstance from '../../../apiConfig/weatherInstance';
import RequestApi from '../../../apiConfig/requestApi';

export default (lat, long) => async dispatch => {
  dispatch(fetchWeather());
  try {
    const response = await axios.get(`${weatherInstance}${RequestApi.GET_WEATHER(lat, long)}`);
    if (response.status === 200) {
      const temperature = response.data.main.temp.toFixed(1);
      const weather = response.data.weather[0].main;
      dispatch(fetchWeatherSuccess(temperature, weather))
    }
  } catch (e) {
    dispatch(fetchWeatherFailure(e.message))
  }
}
