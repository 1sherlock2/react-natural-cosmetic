import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Korea from './Korea';
import { koreaThunk } from '../../redux/reducers/KoreaReducer';
import ContentLoaderByComponent from '../Utils/ContentLoaderByComponent/ContentLoaderByComponent';
import {
	decreasePriceDispatch,
	increasePriceDispatch,
	addInBasketDispatch,
	priceDifferentIndexDispatch,
	selectItemsDispatch,
	sortItemsByPrice,
	sortItemsByBrend,
	sortItemsDate
} from '../../redux/generalDispatchs/generalDispatch';

const Korea_Container = (props) => {
	const [activePriceDifferent, setActivePriceDifferent] = useState(null);
	const [categories, setCategories] = useState(['по цене', 'по бренду', 'по новизне']);
	const [defaultHeaderName, setDefaultHeaderName] = useState('сортировка');
	const [activeCategoried, setActiveCategoried] = useState(false);
	const [selectCategoriesItem, setSelectCategoriesItem] = useState(null);
	let [count, setCount] = useState(1);
	const [isLoaded, setIsLoaded] = useState({
		img: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
		otherInformation: 'В данном разделе представлена коллекция косметики из Южной Кореи'
	});
	const text = ['оптом', 'розница'];
	const selectCategoriesItemFunc = (element, index) => {
		setSelectCategoriesItem(index);
		if (element === 'по цене') {
			props.sortItemsByPrice();
		}
		if (element === 'по бренду') {
			props.sortItemsByBrend();
		}
		if (element === 'по новизне') {
			props.sortItemsDate();
		}
		setDefaultHeaderName(element);
	};

	if (count <= 0) {
		setCount(1);
	}
	const decreaseCount = () => {
		setCount(--count);
		props.decreasePriceDispatch(count);
	};

	const increaseCount = () => {
		setCount(++count);
		props.increasePriceDispatch(count);
	};
	const selectCategories = () => {
		setActiveCategoried(!activeCategoried);
	};

	useEffect(() => {
		props.koreaThunk();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const selectItem = (index) => {
		setActivePriceDifferent(index);
		props.priceDifferentIndexDispatch(index);
	};
	const addInBasket = (item, count) => {
		props.addInBasketDispatch(item, count);
	};
	if (props.isLoading === false) {
		return <ContentLoaderByComponent />;
	} else {
		return (
			<Korea
				text={text}
				addInBasket={addInBasket}
				count={count}
				increaseCount={increaseCount}
				decreaseCount={decreaseCount}
				isLoaded={isLoaded}
				selectItemsDispatch={props.selectItemsDispatch}
				selectCategoriesItemFunc={selectCategoriesItemFunc}
				selectCategoriesItem={selectCategoriesItem}
				activeCategoried={activeCategoried}
				selectCategories={selectCategories}
				defaultHeaderName={defaultHeaderName}
				categories={categories}
				items={props.items}
				product={props.product}
				price={props.price}
				priceIndex={props.priceIndex}
				activePriceDifferent={activePriceDifferent}
				selectItem={selectItem}
			/>
		);
	}
};
let mapStateToProps = (state) => {
	return {
		items: state.koreaData.items,
		product: state.koreaData.product,
		isLoading: state.stocksData.isLoading,
		price: state.stocksData.price,
		priceIndex: state.stocksData.priceIndex
	};
};
export default connect(mapStateToProps, {
	addInBasketDispatch,
	koreaThunk,
	selectItemsDispatch,
	sortItemsByPrice,
	sortItemsByBrend,
	sortItemsDate,
	decreasePriceDispatch,
	increasePriceDispatch,
	priceDifferentIndexDispatch
})(Korea_Container);
