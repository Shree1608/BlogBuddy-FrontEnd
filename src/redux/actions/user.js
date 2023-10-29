import axios from 'axios';
import { server } from '../store';


export const login = formdata => async dispatch => {
  try {
    dispatch({ type: 'loginRequest' });

    const { data } = await axios.post(
      `/user/login`,
      formdata,
      {
        headers: {
          'Content-Type': 'application/json',
        },

        withCredentials: true,
      }
    );

    dispatch({ type: 'loginSuccess', payload: data });
  } catch (error) {

    if (error.response) {
      // Server responded with a non-2xx status code
      console.error(error.response.data);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error('No response received from the server');
    } else {
      // Something else went wrong
      console.error('Error:', error.message);
    }
    dispatch({ type: 'loginFails', payload: error.response.data.message });
  }
};

export const register = formData => async dispatch => {
  try {

    dispatch({ type: 'registerRequest' });

    const { data } = await axios.post(
      `/user/register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      withCredentials: true
    }
    );

    dispatch({ type: 'registerSuccess', payload: data });
  } catch (error) {
    if (error.response) {
      // Server responded with a non-2xx status code
      console.error(error.response.data);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error('No response received from the server');
    } else {
      // Something else went wrong
      console.error('Error:', error.message);
    }
    dispatch({ type: 'registerFail', payload: error.response.data.message });

  }
};

export const getMyProfile = () => async dispatch => {
  try {
    dispatch({ type: 'loadUserRequest' });

    const { data } = await axios.post(
      `/user/me`,
      {
        withCredentials: true,
      }
    );

    dispatch({ type: 'loadUserSuccess', payload: data.user });
  } catch (error) {

    if (error.response) {
      // Server responded with a non-2xx status code
      console.error(error.response.data);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error('No response received from the server');
    } else {
      // Something else went wrong
      console.error('Error:', error.message);
    }
    dispatch({ type: 'loadUserFails', payload: error.response.data.message });
  }
};

export const logout = () => async dispatch => {
  try {
    dispatch({ type: 'logoutRequest' });

    const { data } = await axios.post(
      `/user/logout`,
      {
        withCredentials: true,
      }
    );

    dispatch({ type: 'logoutSuccess', payload: data.message });
  } catch (error) {

    if (error.response) {
      // Server responded with a non-2xx status code
      console.error(error.response.data);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error('No response received from the server');
    } else {
      // Something else went wrong
      console.error('Error:', error.message);
    }
    dispatch({ type: 'logoutFails', payload: error.response.data.message });
  }
};

