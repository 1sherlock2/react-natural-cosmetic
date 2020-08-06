//main content
//wrapperImgContent
export const wrapperImgContent = (items) => ({ type: 'SET_WRAPPER_IMG_CONTENT' });

// stocks
export const stocksDispatch = (items) => ({ type: 'SET_STOCKS', items });
export const selectStockDispatch = (id) => ({ type: 'SELECT_STOCK', id });
export const sortStockByPrice = () => ({ type: 'SORT_STOCK_BY_PRICE' });
export const sortStockByBrend = () => ({ type: 'SORT_STOCK_BY_BREND' });
export const sortStockDate = () => ({ type: 'SORT_STOCK_BY_DATE' });

//korea
export const koreaDispatch = (items) => ({ type: 'SET_KOREA', items });
export const selectKoreaDispatch = (id) => ({ type: 'SELECT_KOREA', id });
export const sortKoreaByPrice = () => ({ type: 'SORT_KOREA_BY_PRICE' });
export const sortKoreaByBrend = () => ({ type: 'SORT_KOREA_BY_BREND' });
export const sortKoreaDate = () => ({ type: 'SORT_KOREA_BY_DATE' });

//perfumery
export const perfumeryDispatch = (items) => ({ type: 'SET_PERFUMERY', items });
export const selectPerfumeryDispatch = (id) => ({ type: 'SELECT_PERFUMERY', id });
export const sortPerfumeryByPrice = () => ({ type: 'SORT_PERFUMERY_BY_PRICE' });
export const sortPerfumeryByBrend = () => ({ type: 'SORT_PERFUMERY_BY_BREND' });
export const sortPerfumeryDate = () => ({ type: 'SORT_PERFUMERY_BY_DATE' });

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
