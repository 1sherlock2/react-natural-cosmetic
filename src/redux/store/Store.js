import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleWare from 'redux-thunk';
import { authDataReducer } from '../reducers/AuthDataReducer';
import { stocksReducer } from '../reducers/StocksReducer';
import { koreaReducer } from '../reducers/KoreaReducer';
import { perfumeryReducer } from '../reducers/PerfumeryReducer';
import { mainContentReducer } from '../reducers/main_content_reducers/MainContentReducer';
const { combineReducers, createStore, applyMiddleware } = require('redux');

const redurPack = combineReducers({
	authData: authDataReducer,
	mainContentData: mainContentReducer,
	stocksData: stocksReducer,
	koreaData: koreaReducer,
	perfumeryData: perfumeryReducer
});

const store = createStore(redurPack, composeWithDevTools(applyMiddleware(thunkMiddleWare)));

export default store;
