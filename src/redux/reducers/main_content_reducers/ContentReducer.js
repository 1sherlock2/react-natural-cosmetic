import { contentDispatch } from '../../generalDispatchs/generalDispatch';
import { API } from '../../API/API';

const initialState = {
	content: null
};

export const contentReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CONTENT':
			return {
				...state,
				content: action.items
			};
		default:
			return { state };
	}
};

export const contentThunk = () => (dispatch) => {
	return API.contentAPI().then((response) => {
		dispatch(contentDispatch(response.data));
	});
};
