import axios from 'axios';
import { GET_PROFILE, PROFILE_ERROR } from './types';

import setAuthToken from '../../utils/setAuthToken';

export const getCurrentProfile = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        status: err.response.status,
        msg: err.response.data.msg
      }
    });
  }
};
