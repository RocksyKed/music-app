import { getCurrentUser } from '../../services/users';

const initialState = {
  data: null,
  isLoggedIn: false,
  isLoading: false
};

export const GET_CURRENT_PENDING = 'me/GET_CURRENT_PENDING';
export const GET_CURRENT_FULFILLED = 'me/GET_CURRENT_FULFILLED';
export const GET_CURRENT_REJECTED = 'me/GET_CURRENT_REJECTED';
export const LOGGED_IN = 'me/LOGGED_IN';

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        data: action.payload
      };
    case GET_CURRENT_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case GET_CURRENT_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        data: action.payload
      };
    case GET_CURRENT_REJECTED:
      return {
        ...state,
        isLoading: false
      };

    default: return state;
  }
};

export const loggedIn = payload => ({
  type: LOGGED_IN,
  payload
});

export const getMe = () => dispatch => {
  dispatch({ type: GET_CURRENT_PENDING });

  return getCurrentUser()
    .then(user =>
      dispatch({
        type: GET_CURRENT_FULFILLED,
        payload: user
      })
    )
    .catch(err => {
      dispatch({ type: GET_CURRENT_REJECTED });
      console.error(err);
    });
};