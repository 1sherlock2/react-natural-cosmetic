import { navigationProductDispatch } from '../../generalDispatchs/generalDispatch';
import { API } from '../../API/API';

const initialState = {
	navigationProduct: null
};

export const navigationProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_NAVIGATION_PRODUCT':
			return {
				...state,
				navigationProduct: action.items
			};
		default:
			return { ...state };
	}
};

export const navigationProductThunk = () => (dispatch) => {
	return API.navigationProductAPI().then((response) => {
		dispatch(navigationProductDispatch(response.data));
	});
};
