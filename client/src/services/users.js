import axios from 'axios';

import { API_BASE_URL } from '../config';

export const TOKEN_KEY = 'accessToken';

export const getAccessToken = () =>
  localStorage.getItem(TOKEN_KEY);

export const setAccessToken = accessToken => {
  localStorage.setItem(TOKEN_KEY, accessToken);

  axios.defaults.headers.common['Authorization'] =
    `Bearer ${accessToken}`;
};

export const hasAccessToken = () =>
  !!getAccessToken();

if (hasAccessToken()) {
  axios.defaults.headers.common['Authorization'] =
    `Bearer ${getAccessToken()}`;
}

export const login = userData =>
  axios.post(`${API_BASE_URL}/login`, userData)
    .then(({ data }) => {
      setAccessToken(data.accessToken);

      return data.user;
    });

export const register = userData =>
  axios.post(`${API_BASE_URL}/users`, userData)
    .then(({ data }) => {
      setAccessToken(data.accessToken);

      return data.user;
    });

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getCurrentUser = () =>
  axios.get(`${API_BASE_URL}/users/me`)
    .then(({ data }) => data);
