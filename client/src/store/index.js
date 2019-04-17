import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import me from './modules/me';
import playlists from './modules/playlists';

const composeEnhancers = (
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
)
  || compose;

const rootReducer = combineReducers({
  me,
  playlists,
  form: formReducer
});

const store =
  createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

export default store;
