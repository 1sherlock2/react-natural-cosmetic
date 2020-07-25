import { API } from '../API/API';

const SET_KOREA = 'SET_KOREA';
const SELECT_KOREA = 'SELECT_KOREA';
const SORT_KOREA_BY_PRICE = 'SORT_KOREA_BY_PRICE';
const SORT_KOREA_BY_BREND = 'SORT_KOREA_BY_BREND';
const SORT_KOREA_BY_DATE = 'SORT_KOREA_BY_DATE';
const SET_ISLOADED = 'SET_ISLOADED';

let initialState = {
	product: null,
	items: null,
	isLoaded: null
};

export const koreaReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_KOREA:
			return {
				...state,
				items: action.items
			};
		case SELECT_KOREA:
			return {
				...state,
				product: state.items.filter((item) => item.id === action.id)
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

export const koreaThunk = () => (dispatch) => {
	return API.koreaAPI().then((response) => {
		dispatch(koreaDispatch(response.data.items));
		dispatch(isLoadedDispatch(response.data.isLoaded));
	});
};
