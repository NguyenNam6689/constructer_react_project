//* LIBRARY
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [];
middleware.push(logger);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
