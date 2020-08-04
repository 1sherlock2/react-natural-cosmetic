const ON_TOGGLE_REGISTER = 'ON_TOGGLE_REGISTER';

const initialState = {
	onRegister: false
};

export const wripperTitleReducer = (state = initialState, action) => {
	switch (action.type) {
		case ON_TOGGLE_REGISTER:
			return {
				...state,
				onRegister: !state.onRegister
			};
		default:
			return {
				...state
			};
	}
};

export const onToggleRegister = () => ({ type: ON_TOGGLE_REGISTER });
