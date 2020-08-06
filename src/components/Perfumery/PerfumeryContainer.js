import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Perfumery from './Perfumery';
import { perfumeryThunk } from '../../redux/reducers/PerfumeryReducer';

import {
	decreasePriceDispatch,
	increasePriceDispatch,
	addInBasketDispatch,
	priceDifferentIndexDispatch,
	selectPerfumeryDispatch,
	sortPerfumeryByPrice,
	sortPerfumeryByBrend,
	sortPerfumeryDate
} from '../../redux/generalDispatchs/generalDispatch';
import ContentLoaderByComponent from '../Utils/ContentLoaderByComponent/ContentLoaderByComponent';

const Perfumery_Container = (props) => {
	const [activePriceDifferent, setActivePriceDifferent] = useState(null);
	const [categories, setCategories] = useState(['по цене', 'по бренду', 'по новизне']);
	const [defaultHeaderName, setDefaultHeaderName] = useState('сортировка');
	const [activeCategoried, setActiveCategoried] = useState(false);
	const [selectCategoriesItem, setSelectCategoriesItem] = useState(null);
	let [count, setCount] = useState(1);

	const selectCategoriesItemFunc = (element, index) => {
		setSelectCategoriesItem(index);
		if (element === 'по цене') {
			props.sortPerfumeryByPrice();
		}
		if (element === 'по бренду') {
			props.sortPerfumeryByBrend();
		}
		if (element === 'по новизне') {
			props.sortPerfumeryDate();
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
		props.perfumeryThunk();
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
			<Perfumery
				addInBasket={addInBasket}
				count={count}
				increaseCount={increaseCount}
				decreaseCount={decreaseCount}
				isLoaded={props.isLoaded}
				selectPerfumeryDispatch={props.selectPerfumeryDispatch}
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
		items: state.perfumeryData.items,
		product: state.perfumeryData.product,
		isLoaded: state.perfumeryData.isLoaded,
		isLoading: state.perfumeryData.isLoading,
		price: state.perfumeryData.price,
		priceIndex: state.perfumeryData.priceIndex
	};
};
export default connect(mapStateToProps, {
	addInBasketDispatch,
	perfumeryThunk,
	selectPerfumeryDispatch,
	sortPerfumeryByPrice,
	sortPerfumeryByBrend,
	decreasePriceDispatch,
	increasePriceDispatch,
	priceDifferentIndexDispatch,
	sortPerfumeryDate
})(Perfumery_Container);
