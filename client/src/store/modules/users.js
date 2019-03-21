const initialState = {
  me: null,
  isLoading: false
};

export const GET_CURRENT_PENDING = 'users/GET_CURRENT_PENDING';
export const GET_CURRENT_FULFILLED = 'users/GET_CURRENT_FULFILLED';
export const GET_CURRENT_REJECTED = 'users/GET_CURRENT_REJECTED';
export const LOGGED_IN = 'users/LOGGED_IN';

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        me: action.payload
      };

    default: return state;
  }
};

export const loggedIn = payload => ({
  type: LOGGED_IN,
  payload
});
