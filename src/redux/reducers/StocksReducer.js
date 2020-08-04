import { API } from '../API/API';
import { changeIsLoadingDispatchFalse, isLoadedDispatch, changeIsLoadingDispatchTrue } from '../generalDispatchs/generalDispatch';
import {
	SET_ISLOADED,
	INCREASE_PRICE,
	CHANGE_IS_LOADING_TRUE,
	CHANGE_IS_LOADING_FALSE,
	DECREASE_PRICE,
	DELETE_BASKET_BY_ID,
	PRICE_DIFFERENT_INDEX,
	ADD_IN_BASKET
} from '../namesTypeFofDispatch/namesTypeFofDispatch';

const SET_STOCKS = 'SET_STOCKS';
const SELECT_STOCK = 'SELECT_STOCK';
const SORT_STOCK_BY_PRICE = 'SORT_STOCK_BY_PRICE';
const SORT_STOCK_BY_BREND = 'SORT_STOCK_BY_BREND';
const SORT_STOCK_BY_DATE = 'SORT_STOCK_BY_DATE';

let initialState = {
	product: null,
	items: null,
	isLoaded: null,
	isLoading: false,
	price: null,
	priceIndex: 1,
	basket: []
};

export const stocksReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_STOCKS:
			return {
				...state,
				items: action.items
			};
		case SELECT_STOCK:
			let b = state.items.filter((item) => item.id === action.id);
			let obj = b.reduce((result, item, index) => {
				result[index] = item;
				return result;
			});
			return {
				...state,
				product: state.items.filter((item) => item.id === action.id),
				price: obj.price
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
					if (action.count < 1) {
						return state.product;
					} else {
						item.price = item.price - state.price;
						return result;
					}
				}, state.product)
			};
		case INCREASE_PRICE:
			return {
				...state,
				product: state.product.reduce((result, item) => {
					item.price = state.price * action.count;
					return result;
				}, state.product)
			};
		case PRICE_DIFFERENT_INDEX:
			return {
				...state,
				priceIndex: action.index
			};
		case ADD_IN_BASKET:
			return {
				...state,
				basket: [...state.basket, action.item]
			};
		case DELETE_BASKET_BY_ID:
			return {
				...state,
				basket: [...state.basket.filter((item) => item.id !== action.id)]
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
