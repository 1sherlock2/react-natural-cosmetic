import { API } from '../API/API';

const SET_STOCKS = 'SET_STOCKS';
const SELECT_STOCK = 'SELECT_STOCK';
const SORT_STOCK_BY_PRICE = 'SORT_STOCK_BY_PRICE';
const SORT_STOCK_BY_BREND = 'SORT_STOCK_BY_BREND';
const SORT_STOCK_BY_DATE = 'SORT_STOCK_BY_DATE';
const SET_ISLOADED = 'SET_ISLOADED';

let initialState = {
	product: null,
	items: null,
	isLoaded: null
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

export const stocksThunk = () => (dispatch) => {
	return API.stocksAPI().then((response) => {
		dispatch(stocksDispatch(response.data.items));
		dispatch(isLoadedDispatch(response.data.isLoaded));
	});
};
