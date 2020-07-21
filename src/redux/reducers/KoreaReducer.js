import { API } from '../API/API';

const SETKOREA = 'SETKOREA';

let initialState = {
	product: null,
	items: null
};

export const koreaReducer = (state = initialState, action) => {
	switch (action.type) {
		case SETKOREA:
			return {
				...state,
				product: action.korea.product,
				items: action.korea.items
			};
		default:
			return {
				...state
			};
	}
};

const setKoreaDispatch = (korea) => ({ type: SETKOREA, korea });

export const setKoreaThunk = () => (dispatch) => {
	return API.koreaAPI().then((response) => {
		dispatch(setKoreaDispatch(response.data.korea));
	});
};
