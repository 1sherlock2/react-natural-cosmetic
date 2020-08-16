//auth
export const authDispatch = (token, userId) => ({ type: 'IS_AUTH', token, userId });
export const authAdminDispatch = (token, userId) => ({ type: 'ADMIN_AUTH', token, userId });
export const registerSuccessDispath = () => ({ type: 'REGISTER_SUCCESS' });

export const wrapperImgContent = (items) => ({ type: 'SET_WRAPPER_IMG_CONTENT', items });
export const contentDispatch = (items) => ({ type: 'SET_CONTENT', items });
export const navigationProductDispatch = (items) => ({ type: 'SET_NAVIGATION_PRODUCT', items });
export const stockMainDispatch = (items) => ({ type: 'SET_STOCK_MAIN', items });
export const adversitingStockDispatch = (items) => ({ type: 'SET_ADVERSITING_STOCK', items });

// items
export const setItemsDispatch = (halfItems, sessionCount) => ({ type: 'SET_ITEMS', halfItems, sessionCount });
export const selectItemsDispatch = (id) => ({ type: 'SELECT_ITEMS', id });
export const sortItemsByPrice = () => ({ type: 'SORT_ITEMS_BY_PRICE' });
export const sortItemsByBrend = () => ({ type: 'SORT_ITEMS_BY_BREND' });
export const sortItemsDate = () => ({ type: 'SORT_ITEMS_BY_DATE' });

export const isLoadedDispatch = (isLoaded) => ({ type: 'SET_ISLOADED', isLoaded });
export const changeIsLoadingDispatchFalse = () => ({ type: 'CHANGE_IS_LOADING_FALSE' });
export const changeIsLoadingDispatchTrue = () => ({ type: 'CHANGE_IS_LOADING_TRUE' });
export const decreasePriceDispatch = (count) => ({ type: 'DECREASE_PRICE', count });
export const increasePriceDispatch = (count) => ({ type: 'INCREASE_PRICE', count });
export const priceDifferentIndexDispatch = (index) => ({ type: 'PRICE_DIFFERENT_INDEX', index });
export const addInBasketDispatch = (item, count) => {
	const countObj = count;
	item.count = countObj;
	return { type: 'ADD_IN_BASKET', item };
};
export const deleteBasketByidDispatch = (id) => ({ type: 'DELETE_BASKET_BY_ID', id });
export const logoutDispatch = () => ({ type: 'LOGOUT' });

//postPorduct
export const postProductSuccess = () => ({ type: 'POST_PRODUCT_SUCCESS' });
