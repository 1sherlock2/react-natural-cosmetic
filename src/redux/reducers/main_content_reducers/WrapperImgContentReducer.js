import { API } from '../../API/API';
import { wrapperImgContent } from '../../generalDispatchs/generalDispatch';

const initialState = {
	wrapperImgContent: null
};

export const wrapperImgContentReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_WRAPPER_IMG_CONTENT':
			return {
				...state,
				wrapperImgContent: action.items
			};
		default:
			return { state };
	}
};
export const wrapperImgContentThunk = () => (dispatch) => {
	return API.wrapperImgContentAPI().then((response) => {
		dispatch(wrapperImgContent(response.data));
	});
};
