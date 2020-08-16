const initialValues = {
	postProductSuccess: false
};

export const generalReducer = (state = initialValues, action) => {
	switch (action.type) {
		case 'POST_PRODUCT_SUCCESS':
			return {
				...state,
				postProductSuccess: true
			};
		default:
			return {
				...state
			};
	}
};
