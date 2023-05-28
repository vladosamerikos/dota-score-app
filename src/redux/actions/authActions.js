import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const backend = axios.create({
  baseURL: BASE_URL,
});

export const login = (email, password) => async (dispatch) => {
  try {
    const form = new FormData();
    form.append('email', email);
    form.append('password', password);

    const response = await backend.post('/auth/login', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const { access, refresh, nickname, logo } = response.data;

    // Almacenar la información en variables de sesión
    sessionStorage.setItem('isAuthenticated', '1');
    sessionStorage.setItem('accessToken', access);
    sessionStorage.setItem('refreshToken', refresh);
    sessionStorage.setItem('nickname', nickname);
    sessionStorage.setItem('logo', logo);
    sessionStorage.setItem('email', email);
    console.log(logo);
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: response.data,
    });

    return response.data;
  } catch (error) {
    dispatch({
      type: 'LOGIN_ERROR',
      payload: error.message,
    });
    throw error;
  }
};

export const register = (email, password, nickname) => async (dispatch) => {
  try {
    const form = new FormData();
    form.append('email', email);
    form.append('password', password);
    form.append('nickname', nickname);

    const response = await backend.post('/auth/register', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    dispatch({
      type: 'REGISTER_SUCCESS',
      payload: response.data,
    });

    return response.data;
  } catch (error) {
    dispatch({
      type: 'REGISTER_ERROR',
      payload: error.message,
    });
    throw error;
  }
};

export const logout = () => {
    sessionStorage.clear();
    return {
      type: 'LOGOUT',
    };
  };
  