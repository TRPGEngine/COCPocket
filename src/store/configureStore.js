import thunk from 'redux-thunk';
const { createStore, applyMiddleware} = require('redux');
const reducer = require('../reducers');

let isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
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