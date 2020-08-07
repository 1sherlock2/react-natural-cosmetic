import React, { useState, useEffect } from 'react';
import SkinCare from './SkinCare';
import { connect } from 'react-redux';
import { skinCareThunk } from '../../redux/reducers/SkinCareReducer';
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

const SkinCare_Container = React.memo((props) => {
	const [activePriceDifferent, setActivePriceDifferent] = useState(null);
	const [categories, setCategories] = useState(['по цене', 'по бренду', 'по новизне']);
	const [defaultHeaderName, setDefaultHeaderName] = useState('сортировка');
	const [activeCategoried, setActiveCategoried] = useState(false);
	const [selectCategoriesItem, setSelectCategoriesItem] = useState(null);
	let [count, setCount] = useState(1);
	const [isLoaded, setIsLoaded] = useState({
		img: 'https://www.letu.ru/common/img/banners/ShuUemura_oil_apr20_205%D1%85264.jpg',
		otherInformation: 'В данном разделе представлена коллекция для ухода за кожей'
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
		console.log(count);
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
		props.skinCareThunk();
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
				<SkinCare
					text={text}
					priceIndex={props.priceIndex}
					price={props.price}
					increasePriceDispatch={props.increasePriceDispatch}
					decreasePriceDispatch={props.decreasePriceDispatch}
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
		product: state.skinCareData.product,
		items: state.skinCareData.items,
		isLoading: state.skinCareData.isLoading,
		price: state.skinCareData.price,
		priceIndex: state.skinCareData.priceIndex
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
		skinCareThunk,
		skinCareThunk
	}),
	withRouter
)(SkinCare_Container);
