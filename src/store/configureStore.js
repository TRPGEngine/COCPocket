import thunk from 'redux-thunk';
const { createStore, applyMiddleware} = require('redux');
const reducer = require('../reducers');
const promise = require('./promise');
// import createLogger from 'redux-logger';
const { createLogger } = require('redux-logger');

let isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});// 放在最后

const createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(createStore);
const initialState = {

};

function configureStore(onComplete) {
  const store = createStoreWithMiddleware(reducer, initialState)
  
  if (isDebuggingInChrome) {
    window.store = store;
  }
  setTimeout(onComplete, 0);
  return store;
}

module.exports = configureStore;