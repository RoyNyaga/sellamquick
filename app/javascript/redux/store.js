import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// Bellow is the general format for defining a redux store

// const store = createStore(rootReducer, preloadedState, enhancer)

// we use undefine when we have no preloadedState
// createStore only accepts one enhancer as its third argument!
// to use multiple enhancers we need to use redux compose 

const composedEnhancer = compose(
  applyMiddleware(thunk), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
  rootReducer, 
  undefined, // no preloadedState
  composedEnhancer,
);

export default store;