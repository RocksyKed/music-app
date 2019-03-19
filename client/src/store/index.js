import { createStore, combineReducers, compose } from 'redux';

// const composeEnhancers = (
//   process.env.NODE_ENV !== 'production' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// )
//   || compose;

const store = createStore((x = null) => x);

export default store;
