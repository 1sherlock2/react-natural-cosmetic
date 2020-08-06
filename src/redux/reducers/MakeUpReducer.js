import { API } from '../API/API';
import { changeIsLoadingDispatchFalse, setItemsDispatch, isLoadedDispatch, changeIsLoadingDispatchTrue } from '../generalDispatchs/generalDispatch';

let initialState = {
	product: null,
	items: null,
	isLoaded: null,
	isLoading: false,
	price: null,
	priceIndex: 1,
	basket: []
};

export const makeUpReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_ITEMS':
			return {
				...state,
				items: action.items
			};
		case 'SELECT_ITEMS':
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
		case 'SORT_ITEMS_BY_PRICE':
			return {
				...state,
				items: state.items.sort((a, b) => (a.price > b.price ? 1 : -1))
			};
		case 'SORT_ITEMS_BY_BREND':
			return {
				...state,
				items: state.items.sort((a, b) => (a.brend > b.brend ? 1 : -1))
			};
		case 'SORT_ITEMS_BY_DATE':
			return {
				...state,
				items: state.items.sort((a, b) => (a.date > b.date ? 1 : -1))
			};
		case 'SET_ISLOADED':
			return {
				...state,
				isLoaded: action.isLoaded
			};
		case 'CHANGE_IS_LOADING_FALSE':
			return {
				...state,
				isLoading: false
			};
		case 'CHANGE_IS_LOADING_TRUE':
			return {
				...state,
				isLoading: true
			};
		case 'DECREASE_PRICE':
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
		case 'INCREASE_PRICE':
			return {
				...state,
				product: state.product.reduce((result, item) => {
					item.price = state.price * action.count;
					return result;
				}, state.product)
			};
		case 'PRICE_DIFFERENT_INDEX':
			return {
				...state,
				priceIndex: action.index
			};
		case 'ADD_IN_BASKET':
			return {
				...state,
				basket: [...state.basket, action.item]
			};
		case 'DELETE_BASKET_BY_ID':
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

export const makeUpThunk = () => (dispatch) => {
	dispatch(changeIsLoadingDispatchFalse());
	return API.makeUpAPI().then((response) => {
		if (response.status === 200) {
			dispatch(setItemsDispatch(response.data.items));
			dispatch(isLoadedDispatch(response.data.isLoaded));
			dispatch(changeIsLoadingDispatchTrue());
		}
	});
};
