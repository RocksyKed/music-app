import { getAllPlaylists } from '../../services/playlists';

const initialState = {
  playlists: [],
  isLoading: false
};

export const GET_PLAYLISTS_PENDING = 'playlists/GET_PLAYLISTS_PENDING';
export const GET_PLAYLISTS_FULFILLED = 'playlists/GET_PLAYLISTS_FULFILLED';
export const GET_PLAYLISTS_REJECTED = 'playlists/GET_PLAYLISTS_REJECTED';
export const ADD_PLAYLIST_PENDING  = 'playlists/ADD_PLAYLIST_PENDING';
export const ADD_PLAYLIST_FULFILLED  = 'playlists/ADD_PLAYLIST_FULFILLED';
export const ADD_PLAYLIST_REJECTED  = 'playlists/ADD_PLAYLIST_REJECTED';

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAYLISTS_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_PLAYLISTS_FULFILLED:
      return {
        ...state,
        playlists: action.payload,
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
        playlists: [
          ...state.playlists,
          action.payload
        ],
        isLoading: false
      };
    case ADD_PLAYLIST_REJECTED:
      return {
        ...state,
        isLoading: false
      };

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
