import { adversitingStockDispatch } from '../../generalDispatchs/generalDispatch';
import { API } from '../../API/API';

const initialState = {
	adversitingStock: null
};

export const adversitingStockReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_ADVERSITING_STOCK':
			return {
				...state,
				adversitingStock: action.items
			};
		default:
			return { ...state };
	}
};

export const adversitingStockThunk = () => (dispatch) => {
	return API.adversitingStockAPI().then((response) => {
		dispatch(adversitingStockDispatch(response.data));
	});
};
