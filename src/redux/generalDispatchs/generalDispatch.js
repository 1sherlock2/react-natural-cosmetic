//main content
//wrapperImgContent
export const wrapperImgContent = (items) => ({ type: 'SET_WRAPPER_IMG_CONTENT' });

// items
export const setItemsDispatch = (items) => ({ type: 'SET_ITEMS', items });
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
