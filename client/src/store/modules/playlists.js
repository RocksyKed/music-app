import { getAllPlaylists, addNewPlaylist } from '../../services/playlists';
import { LOGGED_OUT } from './me';

const getInitialState = () => ({
  list: [],
  isLoading: false
});

export const GET_PLAYLISTS_PENDING = 'playlists/GET_PLAYLISTS_PENDING';
export const GET_PLAYLISTS_FULFILLED = 'playlists/GET_PLAYLISTS_FULFILLED';
export const GET_PLAYLISTS_REJECTED = 'playlists/GET_PLAYLISTS_REJECTED';
export const ADD_PLAYLIST_PENDING  = 'playlists/ADD_PLAYLIST_PENDING';
export const ADD_PLAYLIST_FULFILLED  = 'playlists/ADD_PLAYLIST_FULFILLED';
export const ADD_PLAYLIST_REJECTED  = 'playlists/ADD_PLAYLIST_REJECTED';

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case GET_PLAYLISTS_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_PLAYLISTS_FULFILLED:
      return {
        ...state,
        list: action.payload,
        isLoading: false
      };
    case GET_PLAYLISTS_REJECTED:
      return {
        ...state,
        isLoading: false
      };
    case ADD_PLAYLIST_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case ADD_PLAYLIST_FULFILLED:
      return {
        ...state,
        list: [
          ...state.list,
          action.payload
        ],
        isLoading: false
      };
    case ADD_PLAYLIST_REJECTED:
      return {
        ...state,
        isLoading: false
      };
    case LOGGED_OUT:
      return getInitialState();
    default: return state;
  }
};

export const getPlaylists = () => dispatch => {
  dispatch({ type: GET_PLAYLISTS_PENDING });

  getAllPlaylists()
    .then(playlists =>
      dispatch({
        type: GET_PLAYLISTS_FULFILLED,
        payload: playlists
      })
    )
    .catch(err => {
      dispatch({ type: GET_PLAYLISTS_REJECTED });
      console.error(err);
    })
};

export const addPlaylist = playlistData => dispatch => {
  dispatch({ type: ADD_PLAYLIST_PENDING });

  addNewPlaylist(playlistData)
    .then(playlist =>
      dispatch({
        type: ADD_PLAYLIST_FULFILLED,
        payload: playlist
      })
    )
    .catch(err => {
      dispatch({ type: ADD_PLAYLIST_REJECTED });
      console.error(err);
    })
};
