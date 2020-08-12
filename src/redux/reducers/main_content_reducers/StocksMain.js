import { stockMainDispatch } from '../../generalDispatchs/generalDispatch';
import { API } from '../../API/API';

const initialState = {
	stockMain: null
};

export const stockMainReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_STOCK_MAIN':
			return {
				...state,
				stockMain: action.items
			};
		default:
			return { ...state };
	}
};

export const stockMainThunk = () => (dispatch) => {
	return API.stockMainAPI().then((response) => {
		dispatch(stockMainDispatch(response.data));
	});
};
