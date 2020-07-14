import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleWare from 'redux-thunk';
import { authDataReducer } from '../reducers/AuthDataReducer';
const { combineReducers, createStore, applyMiddleware } = require('redux');

const redurPack = combineReducers({
	authData: authDataReducer
});

const store = createStore(redurPack, composeWithDevTools(applyMiddleware(thunkMiddleWare)));

export default store;
