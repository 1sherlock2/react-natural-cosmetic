import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Perfumery from './Perfumery';
import { perfumeryThunk } from '../../redux/reducers/PerfumeryReducer';

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
import ContentLoaderByComponent from '../Utils/ContentLoaderByComponent/ContentLoaderByComponent';

const Perfumery_Container = (props) => {
	const [activePriceDifferent, setActivePriceDifferent] = useState(null);
	const [categories, setCategories] = useState(['по цене', 'по бренду', 'по новизне']);
	const [defaultHeaderName, setDefaultHeaderName] = useState('сортировка');
	const [activeCategoried, setActiveCategoried] = useState(false);
	const [selectCategoriesItem, setSelectCategoriesItem] = useState(null);
	let [count, setCount] = useState(1);
	const [isLoaded, setIsLoaded] = useState({
		img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
		otherInformation: 'В данном разделе представлена коллекция духов'
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
			props.sortItemsByBrend();
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
		items: state.perfumeryData.items,
		product: state.perfumeryData.product,
		isLoading: state.perfumeryData.isLoading,
		price: state.perfumeryData.price,
		priceIndex: state.perfumeryData.priceIndex
	};
};
export default connect(mapStateToProps, {
	addInBasketDispatch,
	perfumeryThunk,
	selectItemsDispatch,
	sortItemsByPrice,
	sortItemsByBrend,
	sortItemsDate,
	decreasePriceDispatch,
	increasePriceDispatch,
	priceDifferentIndexDispatch
})(Perfumery_Container);
