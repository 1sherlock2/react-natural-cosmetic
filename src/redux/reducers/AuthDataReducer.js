import { API } from '../API/API';
import { authAdminDispatch, authDispatch, registerSuccessDispath } from '../generalDispatchs/generalDispatch';

const initialState = {
	isAuth: false,
	token: null,
	userId: null,
	isRegister: false,
	auth: null,
	registerSuccess: false,
	adminAuth: false
};

export const authDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'IS_AUTH':
			return {
				...state,
				isAuth: true,
				auth: action.values
			};
		case 'REGISTER_SUCCESS':
			return {
				...state,
				registerSuccess: true,
				isRegister: true
			};
		case 'LOGOUT':
			return {
				...state,
				isAuth: null,
				auth: null
			};
		case 'ADMIN_AUTH':
			return {
				...state,
				auth: action.items,
				adminAuth: true
			};
		default:
			return { state };
	}
};

export const authThunk = (values) => (dispatch) => {
	return API.authAPI(values).then((response) => {
		if (response.request.status === 200) {
			const { token, userId } = response.data;
			dispatch(authDispatch(token, userId));
		}
		if (response.data.right === 'admin') {
			const { token, userId } = response.data;
			dispatch(authAdminDispatch(token, userId));
			console.log(response);
		}
	});
};

export const authRegisterThunk = (values) => (dispatch) => {
	return API.authRegisterAPI(values).then((response) => {
		if (response.request.status === 200) {
			dispatch(registerSuccessDispath());
		}
	});
};
