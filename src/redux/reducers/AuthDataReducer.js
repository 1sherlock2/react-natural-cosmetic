import { API } from '../API/API';
import { authAdminDispatch, authDispatch, registerSuccessDispath, logoutDispatch } from '../generalDispatchs/generalDispatch';
import { useAuth } from '../../authCallBackHook/AuthCallBackHook';

const initialState = {
	isAuth: false,
	token: null,
	userId: null,
	isRegister: false,
	registerSuccess: false,
	adminAuth: false
};

export const authDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'IS_AUTH':
			return {
				...state,
				isAuth: true,
				token: action.token,
				userId: action.userId
			};
		case 'REGISTER_SUCCESS':
			return {
				...state,
				registerSuccess: true,
				isRegister: true
			};
		case 'LOGOUT':
			return {
				isAuth: false,
				token: null,
				userId: null
			};
		case 'ADMIN_AUTH':
			return {
				...state,
				isAuth: true,
				token: action.token,
				userId: action.userId,
				adminAuth: true
			};
		default:
			return { ...state };
	}
};

export const authRegisterThunk = (values) => (dispatch) => {
	return API.authRegisterAPI(values).then((response) => {
		if (response.request.status === 200) {
			dispatch(registerSuccessDispath());
		}
	});
};

export const authThunk = (values) => (dispatch) => {
	return API.authAPI(values).then((response) => {
		const { token, userId, right } = response.data;
		if (response.request.status === 200) {
			useAuth.login(token, userId, right);
			dispatch(authDispatch(token, userId));
		}
		if (response.data.right === 'admin') {
			useAuth.login(token, userId, right);
			dispatch(authAdminDispatch(token, userId, right));
		}
	});
};

export const logoutThunk = () => (dispatch) => {
	return API.logoutAPI().then((response) => {
		if (response.data.message === 'logout') {
			useAuth.logout();
			dispatch(logoutDispatch());
		}
	});
};
