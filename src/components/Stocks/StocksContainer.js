import React, { useState, useEffect } from 'react';
import Stocks from './Stocks';
import { connect } from 'react-redux';
import { stocksThunk } from '../../redux/reducers/StocksReducer';
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

const Stocks_Container = React.memo((props) => {
	const [activePriceDifferent, setActivePriceDifferent] = useState(null);
	const [categories, setCategories] = useState(['по цене', 'по бренду', 'по новизне']);
	const [defaultHeaderName, setDefaultHeaderName] = useState('сортировка');
	const [activeCategoried, setActiveCategoried] = useState(false);
	const [selectCategoriesItem, setSelectCategoriesItem] = useState(null);
	let [count, setCount] = useState(1);
	const [productForm, setProductForm] = useState(false);
	const [isLoaded, setIsLoaded] = useState({
		img: 'https://images.unsplash.com/photo-1561920723-e0c68a4fe723?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=421&q=80',
		otherInformation: 'В данном разделе вы найдете выгодные предложения по заниженным ценам'
	});
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
		props.stocksThunk();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const selectItem = (index) => {
		setActivePriceDifferent(index);
		props.priceDifferentIndexDispatch(index);
	};

	const addInBasket = (item, count) => {
		props.addInBasketDispatch(item, count);
	};

	const addProduct = () => {
		setProductForm(!productForm);
	};

	const onSubmit = (values) => {
		console.log(values);
	};
	if (props.isLoading === false) {
		return <ContentLoaderByComponent />;
	} else {
		return (
			<div>
				<Stocks
					addProduct={addProduct}
					onSubmit={onSubmit}
					productForm={productForm}
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
					adminAuth={props.adminAuth}
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
		priceIndex: state.stocksData.priceIndex,
		adminAuth: state.authData.adminAuth
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
		stocksThunk
	}),
	withRouter
)(Stocks_Container);
