import { API } from '../../API/API';

const initialState = {
	wrapperImgContent: null,
	content: null,
	navigationProduct: null,
	stocksMain: null,
	adversitingStock: null
};

export const mainContentReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_MAIN_CONTENT':
			return {
				...state,
				wrapperImgContent: action.wrapperImgContent,
				content: action.content,
				navigationProduct: action.navigationProduct,
				stocksMain: action.stocksMain,
				adversitingStock: action.adversitingStock
			};
		default:
			return { state };
	}
};

const setMainContentDispatch = (wrapperImgContent, content, navigationProduct, stocksMain, adversitingStock) => ({
	type: 'SET_MAIN_CONTENT',
	wrapperImgContent,
	content,
	navigationProduct,
	stocksMain,
	adversitingStock
});

export const mainContentThunk = () => (dispatch) => {
	return API.mainAPI().then((response) => {
		console.log(response);
		const { wrapperImgContent, content, navigationProduct, stocksMain, adversitingStock } = response.data;
		dispatch(setMainContentDispatch(wrapperImgContent, content, navigationProduct, stocksMain, adversitingStock));
	});
};
