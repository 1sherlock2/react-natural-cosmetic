import { API } from '../API/API';

const SET_KOREA = 'SET_KOREA';
const SELECT_KOREA = 'SELECT_KOREA';
const SORT_KOREA_BY_PRICE = 'SORT_KOREA_BY_PRICE';
const SORT_KOREA_BY_BREND = 'SORT_KOREA_BY_BREND';
const SORT_KOREA_BY_DATE = 'SORT_KOREA_BY_DATE';
const SET_ISLOADED = 'SET_ISLOADED';
const CHANGE_IS_LOADING_TRUE = 'CHANGE_IS_LOADING_TRUE';
const CHANGE_IS_LOADING_FALSE = 'CHANGE_IS_LOADING_FALSE';
const DECREASE_PRICE = 'DECREASE_PRICE';
const INCREASE_PRICE = 'INCREASE_PRICE';
const PRICE_DIFFERENT_INDEX = 'PRICE_DIFFERENT_INDEX';
const ADD_IN_BASKET = 'ADD_IN_BASKET';
const DELETE_BASKET_BY_ID = 'DELETE_BASKET_BY_ID';

let initialState = {
	product: null,
	items: null,
	isLoaded: null,
	isLoading: false,
	price: null,
	priceIndex: 1,
	basket: []
};

export const koreaReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_KOREA:
			return {
				...state,
				items: action.items
			};
		case SELECT_KOREA:
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
		case SORT_KOREA_BY_PRICE:
			return {
				...state,
				items: state.items.sort((a, b) => (a.price > b.price ? 1 : -1))
			};
		case SORT_KOREA_BY_BREND:
			return {
				...state,
				items: state.items.sort((a, b) => (a.brend > b.brend ? 1 : -1))
			};
		case SORT_KOREA_BY_DATE:
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

const koreaDispatch = (items) => ({ type: SET_KOREA, items });
export const selectKoreaDispatch = (id) => ({ type: SELECT_KOREA, id });
export const sortKoreaByPrice = () => ({ type: SORT_KOREA_BY_PRICE });
export const sortKoreaByBrend = () => ({ type: SORT_KOREA_BY_BREND });
export const sortKoreaDate = () => ({ type: SORT_KOREA_BY_DATE });
const isLoadedDispatch = (isLoaded) => ({ type: SET_ISLOADED, isLoaded });
const changeIsLoadingDispatchFalse = () => ({ type: CHANGE_IS_LOADING_FALSE });
const changeIsLoadingDispatchTrue = () => ({ type: CHANGE_IS_LOADING_TRUE });
export const decreasePriceDispatch = (count) => ({ type: DECREASE_PRICE, count });
export const increasePriceDispatch = (count) => ({ type: INCREASE_PRICE, count });
export const priceDifferentIndexDispatch = (index) => ({ type: PRICE_DIFFERENT_INDEX, index });
export const addInBasketDispatch = (item, count) => {
	const countObj = count;
	item.count = countObj;
	return {
		type: ADD_IN_BASKET,
		item
	};
};
export const deleteBasketByidDispatch = (id) => ({ type: DELETE_BASKET_BY_ID, id });

export const koreaThunk = () => (dispatch) => {
	dispatch(changeIsLoadingDispatchFalse());
	return API.koreaAPI().then((response) => {
		dispatch(koreaDispatch(response.data.items));
		dispatch(isLoadedDispatch(response.data.isLoaded));
		dispatch(changeIsLoadingDispatchTrue());
	});
};
