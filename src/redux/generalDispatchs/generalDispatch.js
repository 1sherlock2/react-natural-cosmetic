import {
	SET_ISLOADED,
	INCREASE_PRICE,
	CHANGE_IS_LOADING_TRUE,
	CHANGE_IS_LOADING_FALSE,
	DECREASE_PRICE,
	DELETE_BASKET_BY_ID,
	PRICE_DIFFERENT_INDEX,
	ADD_IN_BASKET
} from '../namesTypeFofDispatch/namesTypeFofDispatch';

export const isLoadedDispatch = (isLoaded) => ({ type: SET_ISLOADED, isLoaded });
export const changeIsLoadingDispatchFalse = () => ({ type: CHANGE_IS_LOADING_FALSE });
export const changeIsLoadingDispatchTrue = () => ({ type: CHANGE_IS_LOADING_TRUE });
export const decreasePriceDispatch = (count) => ({ type: DECREASE_PRICE, count });
export const increasePriceDispatch = (count) => ({ type: INCREASE_PRICE, count });
export const priceDifferentIndexDispatch = (index) => ({ type: PRICE_DIFFERENT_INDEX, index });
export const addInBasketDispatch = (item, count) => {
	const countObj = count;
	item.count = countObj;
	return {
		type: ADD_IN_BASKET,
		item
	};
};
export const deleteBasketByidDispatch = (id) => ({ type: DELETE_BASKET_BY_ID, id });
