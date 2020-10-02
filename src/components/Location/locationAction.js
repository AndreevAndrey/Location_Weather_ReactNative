import { fetchAddress, fetchAddressSuccess, fetchAddressFailure } from './appReducer';
import axios from 'axios';
import { geocodingInstance } from '../../apiConfig/apiInstance';
import RequestApi from '../../apiConfig/requestApi';

export default (lat, long) => async dispatch => {
  dispatch(fetchAddress());
  try {
    const response = await axios.get(`${geocodingInstance}${RequestApi.GET_ADDRESS(lat, long)}`);
    if (response.status === 200) {
      const address = response.data.Response.View[0].Result[0].Location.Address.Label;
      dispatch(fetchAddressSuccess(address))
    }
  } catch (e) {
    dispatch(fetchAddressFailure(e.message))
  }
}
