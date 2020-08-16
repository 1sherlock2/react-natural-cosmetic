import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleWare from 'redux-thunk';
import { authDataReducer } from '../reducers/AuthDataReducer';
import { stocksReducer } from '../reducers/StocksReducer';
import { koreaReducer } from '../reducers/KoreaReducer';
import { perfumeryReducer } from '../reducers/PerfumeryReducer';
import { skinCareReducer } from '../reducers/SkinCareReducer';
import { makeUpReducer } from '../reducers/MakeUpReducer';
import { wrapperImgContentReducer } from '../reducers/main_content_reducers/WrapperImgContentReducer';
import { menReducer } from '../reducers/MenReducer';
import { accessoriesReducer } from '../reducers/AccessoriesReducer';
import { kidsReducer } from '../reducers/KidsReducer';
import { giftReducer } from '../reducers/GiftReducer';
import { contentReducer } from '../reducers/main_content_reducers/ContentReducer';
import { navigationProductReducer } from '../reducers/main_content_reducers/NavigationProductReducer';
import { stockMainReducer } from '../reducers/main_content_reducers/StocksMain';
import { adversitingStockReducer } from '../reducers/main_content_reducers/AdversitingStock';
import { wripperReducer } from '../reducers/WrapperReducer';
import { generalReducer } from '../reducers/GeneralReducer';
const { combineReducers, createStore, applyMiddleware } = require('redux');

const redurPack = combineReducers({
	generalData: generalReducer,
	wrapperData: wripperReducer,
	authData: authDataReducer,
	stocksData: stocksReducer,
	koreaData: koreaReducer,
	perfumeryData: perfumeryReducer,
	skinCareData: skinCareReducer,
	makeUpData: makeUpReducer,
	menData: menReducer,
	accessoriesData: accessoriesReducer,
	kids: kidsReducer,
	giftData: giftReducer,
	wrapperImgContentData: wrapperImgContentReducer,
	contentData: contentReducer,
	navigationProductData: navigationProductReducer,
	stockMainData: stockMainReducer,
	adversitingStockData: adversitingStockReducer
	// brendsData: brendsReducer
});
const store = createStore(redurPack, composeWithDevTools(applyMiddleware(thunkMiddleWare)));

export default store;
