import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer';

// Bellow is the general format for defining a redux store

// const store = createStore(rootReducer, preloadedState, enhancer)

// we use undefine when we have no preloadedState
// createStore only accepts one enhancer as its third argument!
// to use multiple enhancers we need to use redux compose 


// N/B configureStore store from @reduxjs/toolkit provides more tooling than createStore
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk], // generally configureStore provides thunk out of the box but I included it again as an example on how to include other middlewares.
  devTools: process.env.NODE_ENV !== 'production',
})


export default store;