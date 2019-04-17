import axios from 'axios';

import { API_BASE_URL } from '../config';

export const getAllPlaylists = () =>
  axios.get(`${API_BASE_URL}/playlists`)
    .then(({data}) => {
      console.log(data);
      return data
    });