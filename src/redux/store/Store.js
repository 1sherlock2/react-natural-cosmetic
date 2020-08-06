import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleWare from 'redux-thunk';
import { authDataReducer } from '../reducers/AuthDataReducer';
import { stocksReducer } from '../reducers/StocksReducer';
import { koreaReducer } from '../reducers/KoreaReducer';
import { perfumeryReducer } from '../reducers/PerfumeryReducer';
import { skinCareReducer } from '../reducers/SkinCareReducer';
import { makeUpReducer } from '../reducers/MakeUpReducer';
import { mainContentReducer } from '../reducers/main_content_reducers/MainContentReducer';
import { menReducer } from '../reducers/MenReducer';
import { accessoriesReducer } from '../reducers/AccessoriesReducer';
import { kidsReducer } from '../reducers/KidsReducer';
import { giftReducer } from '../reducers/GiftReducer';
const { combineReducers, createStore, applyMiddleware } = require('redux');

const redurPack = combineReducers({
	authData: authDataReducer,
	mainContentData: mainContentReducer,
	stocksData: stocksReducer,
	koreaData: koreaReducer,
	perfumeryData: perfumeryReducer,
	skinCareData: skinCareReducer,
	makeUpData: makeUpReducer,
	menData: menReducer,
	accessoriesData: accessoriesReducer,
	kids: kidsReducer,
	giftData: giftReducer
});
const store = createStore(redurPack, composeWithDevTools(applyMiddleware(thunkMiddleWare)));

export default store;
