import Accessories from './Accessories';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { accessoriesThunk } from '../../redux/reducers/AccessoriesReducer';
import ContentLoaderByComponent from '../Utils/ContentLoaderByComponent/ContentLoaderByComponent';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
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
import LayoutPageForNavigation from '../../layouts/LayoutPageForNavigation/LayoutPageForNavigation';

const Accessories_Container = React.memo((props) => {
	const [activePriceDifferent, setActivePriceDifferent] = useState(null);
	const [categories, setCategories] = useState(['по цене', 'по бренду', 'по новизне']);
	const [defaultHeaderName, setDefaultHeaderName] = useState('сортировка');
	const [activeCategoried, setActiveCategoried] = useState(false);
	const [selectCategoriesItem, setSelectCategoriesItem] = useState(null);
	let [count, setCount] = useState(1);
	const [isLoaded, setIsLoaded] = useState({
		img: 'https://www.letu.ru/common/img/banners/KL_mC_feb20_205x264.jpg',
		otherInformation: 'В данном разделе представлена фирменная коллекция различных аксессуаров'
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
		props.accessoriesThunk();
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
			<div>
				<LayoutPageForNavigation
					priceIndex={props.priceIndex}
					price={props.price}
					increasePriceDispatch={props.increasePriceDispatch}
					decreasePriceDispatch={props.decreasePriceDispatch}
					count={count}
					text={text}
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
					activePriceDifferent={activePriceDifferent}
					selectItem={selectItem}
					addInBasket={addInBasket}
				/>
			</div>
		);
	}
});

let mapStateToProps = (state) => {
	return {
		product: state.stocksData.product,
		items: state.stocksData.items,
		isLoading: state.stocksData.isLoading,
		price: state.stocksData.price,
		priceIndex: state.stocksData.priceIndex
	};
};

export default compose(
	connect(mapStateToProps, {
		decreasePriceDispatch,
		increasePriceDispatch,
		addInBasketDispatch,
		priceDifferentIndexDispatch,
		selectItemsDispatch,
		sortItemsByPrice,
		sortItemsByBrend,
		sortItemsDate,
		accessoriesThunk
	}),
	withRouter
)(Accessories_Container);
