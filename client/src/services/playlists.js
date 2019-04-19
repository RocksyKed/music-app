import axios from 'axios';

import { API_BASE_URL } from '../config';

export const getAllPlaylists = () =>
  axios.get(`${API_BASE_URL}/playlists`)
    .then(({ data }) => data);

export const addNewPlaylist = playlistData => {
  const data = new FormData();
  data.append('cover', playlistData.file);
  data.append('name', playlistData.name);
  data.append('isPrivate', playlistData.isPrivate);

  return axios.post(`${API_BASE_URL}/playlists`, data)
    .then(({ data }) => data);
};

export const deleteOnePlaylist = playlistId =>
  axios.delete(`${API_BASE_URL}/playlist/${playlistId}`)
    .then(({ data }) => data);
