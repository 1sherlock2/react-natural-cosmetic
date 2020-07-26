import { API } from '../API/API';

const SET_STOCKS = 'SET_STOCKS';
const SELECT_STOCK = 'SELECT_STOCK';
const SORT_STOCK_BY_PRICE = 'SORT_STOCK_BY_PRICE';
const SORT_STOCK_BY_BREND = 'SORT_STOCK_BY_BREND';
const SORT_STOCK_BY_DATE = 'SORT_STOCK_BY_DATE';
const SET_ISLOADED = 'SET_ISLOADED';
const CHANGE_IS_LOADING_TRUE = 'CHANGE_IS_LOADING_TRUE';
const CHANGE_IS_LOADING_FALSE = 'CHANGE_IS_LOADING_FALSE';
const DECREASE_PRICE = 'DECREASE_PRICE';
const INCREASE_PRICE = 'INCREASE_PRICE';

let initialState = {
	product: null,
	items: null,
	isLoaded: null,
	isLoading: false,
	price: null
	// count: 1
};

export const stocksReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_STOCKS:
			return {
				...state,
				items: action.items
			};
		case SELECT_STOCK:
			return {
				...state,
				product: state.items.filter((item) => item.id === action.id)
			};
		case SORT_STOCK_BY_PRICE:
			return {
				...state,
				items: state.items.sort((a, b) => (a.price > b.price ? 1 : -1))
			};
		case SORT_STOCK_BY_BREND:
			return {
				...state,
				items: state.items.sort((a, b) => (a.brend > b.brend ? 1 : -1))
			};
		case SORT_STOCK_BY_DATE:
			return {
				...state,
				items: state.items.sort((a, b) => (a.date > b.date ? 1 : -1))
			};
		case SET_ISLOADED:
			return {
				...state,
				isLoaded: action.isLoaded
			};
		case CHANGE_IS_LOADING_FALSE:
			return {
				...state,
				isLoading: false
			};
		case CHANGE_IS_LOADING_TRUE:
			return {
				...state,
				isLoading: true
			};
		case DECREASE_PRICE:
			return {
				...state,
				product: state.product.reduce((result, item) => {
					item.price = item.price / action.count;
					return result;
				}, state.product)
			};
		case INCREASE_PRICE:
			// const obj = state.product.reduce((result, item, index) => {
			// 	result[index] = item;
			// 	return result;
			// });
			// console.log(obj.price);
			return {
				...state,
				price: state.product.reduce((result, item, index) => {
					result[index] = item;
					return result;
				}),
				product: state.product.reduce((result, item) => {
					item.price = state.price * action.count;
					console.log(state.price);
					return result;
				}, state.product)
			};
		default:
			return {
				...state
			};
	}
};

const stocksDispatch = (items) => ({ type: SET_STOCKS, items });
export const selectStockDispatch = (id) => ({ type: SELECT_STOCK, id });
export const sortStockByPrice = () => ({ type: SORT_STOCK_BY_PRICE });
export const sortStockByBrend = () => ({ type: SORT_STOCK_BY_BREND });
export const sortStockDate = () => ({ type: SORT_STOCK_BY_DATE });
const isLoadedDispatch = (isLoaded) => ({ type: SET_ISLOADED, isLoaded });
const changeIsLoadingDispatchFalse = () => ({ type: CHANGE_IS_LOADING_FALSE });
const changeIsLoadingDispatchTrue = () => ({ type: CHANGE_IS_LOADING_TRUE });
export const decreasePriceDispatch = (count) => ({ type: DECREASE_PRICE, count });
export const increasePriceDispatch = (count) => ({ type: INCREASE_PRICE, count });

export const stocksThunk = () => (dispatch) => {
	dispatch(changeIsLoadingDispatchFalse());
	return API.stocksAPI().then((response) => {
		if (response.status === 200) {
			dispatch(stocksDispatch(response.data.items));
			dispatch(isLoadedDispatch(response.data.isLoaded));
			dispatch(changeIsLoadingDispatchTrue());
		}
	});
};
