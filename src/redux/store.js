import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers';

const Store = createStore(appReducer, applyMiddleware(thunk))
export {Store};