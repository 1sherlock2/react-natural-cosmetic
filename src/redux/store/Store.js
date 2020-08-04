import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleWare from 'redux-thunk';
import { authDataReducer } from '../reducers/AuthDataReducer';
import { stocksReducer } from '../reducers/StocksReducer';
import { contentReducer } from '../reducers/main_content_reducers/ContentReducer';
import { adversitingStockReducer } from '../reducers/main_content_reducers/AdversitingStockReducer';
import { navigationProductReducer } from '../reducers/main_content_reducers/NavigationProductReducer';
import { stocksContainerReducer } from '../reducers/main_content_reducers/StocksContainerReducer';
import { wrapperImgContentReducer } from '../reducers/main_content_reducers/WrapperImgContentReducer';
import { koreaReducer } from '../reducers/KoreaReducer';
import { wripperTitleReducer } from '../reducers/WrapperTitleReducer';
const { combineReducers, createStore, applyMiddleware } = require('redux');

const redurPack = combineReducers({
	authData: authDataReducer,
	stocksData: stocksReducer,
	wripperTitleData: wripperTitleReducer,
	contentData: contentReducer,
	adversitingStockData: adversitingStockReducer,
	navigationProductData: navigationProductReducer,
	stocksContainerData: stocksContainerReducer,
	koreaData: koreaReducer,
	wrapperImgContentData: wrapperImgContentReducer
});

const store = createStore(redurPack, composeWithDevTools(applyMiddleware(thunkMiddleWare)));

export default store;
