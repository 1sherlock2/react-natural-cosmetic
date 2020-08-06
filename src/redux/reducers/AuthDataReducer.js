import { API } from '../API/API';

const IS_AUTH = 'IS_AUTH';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

const initialState = {
	isAuth: false,
	isRegister: false,
	auth: null,
	registerSuccess: false
};

export const authDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case IS_AUTH:
			return {
				...state,
				isAuth: true,
				auth: action.values
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				registerSuccess: true,
				isRegister: true
			};
		default:
			return { ...state };
	}
};

const authDispatch = (values) => ({ type: IS_AUTH, values });
const registerSuccessDispath = () => ({ type: REGISTER_SUCCESS });

export const authThunk = (values) => (dispatch) => {
	return API.authAPI(values).then((response) => {
		if (response.request.status === 201) {
			console.log(response);
			dispatch(authDispatch(response.data));
		}
	});
};

export const authRegisterThunk = (values) => (dispatch) => {
	return API.authRegisterAPI(values).then((response) => {
		if (response.request.status === 201) {
			dispatch(registerSuccessDispath());
		}
	});
};
