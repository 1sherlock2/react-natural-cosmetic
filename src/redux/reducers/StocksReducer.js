import { API } from '../API/API';

const SETSTOCKS = 'SETSTOCKS';

let initialState = {
	product: null,
	items: null
};

export const stocksReducer = (state = initialState, action) => {
	switch (action.type) {
		case SETSTOCKS:
			return {
				...state,
				product: action.product,
				items: action.items
			};
		default:
			return {
				...state
			};
	}
};

const stocksDispatch = (product, items) => ({ type: SETSTOCKS, product, items });

export const stocksThunk = () => (dispatch) => {
	return API.stocksAPI().then((response) => {
		dispatch(stocksDispatch(response.data.stocks.product, response.data.stocks.items));
	});
};
