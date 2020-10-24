import React, { useState, useEffect, createRef, useRef } from 'react';
import { connect } from 'react-redux';
import { stocksThunk, deleteItemThunk } from '../../redux/reducers/StocksReducer';
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

const Stocks_Container = React.memo((props) => {
	const [items, setItems] = useState(props.items);
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
	// const [modal, setModal] = useState(false);
	const selectCategoriesItemFunc = (element, index) => {
		setSelectCategoriesItem((index) => index);
		if (element === 'по цене') {
			props.sortItemsByPrice();
		}
		if (element === 'по бренду') {
			props.sortItemsByBrend();
		}
		if (element === 'по новизне') {
			props.sortItemsDate();
		}
		setDefaultHeaderName((element) => element);
	};

	if (count <= 0) {
		setCount(1);
	}
	const decreaseCount = () => {
		setCount((count) => --count);
		console.log(count);
		props.decreasePriceDispatch(count);
	};

	const increaseCount = () => {
		setCount((count) => ++count);
		props.increasePriceDispatch(count);
	};

	const selectCategories = () => {
		setActiveCategoried((activeCategoried) => !activeCategoried);
	};
	useEffect(() => {
		props.stocksThunk();
		console.log('stocks render');
	}, [items]);

	const selectItem = (index) => {
		setActivePriceDifferent((index) => index);
		props.priceDifferentIndexDispatch(index);
	};

	const addInBasket = (item, count) => {
		props.addInBasketDispatch(item, count);
	};

	const addProduct = () => {
		setProductForm((productForm) => !productForm);
	};

	const deleteItem = (id) => {
		props.deleteItemThunk(id).then(() => {
			setItems((items) => props.items);
		});
	};

	if (props.isLoading === false) {
		return <ContentLoaderByComponent />;
	} else {
		return (
			<div>
				<LayoutPageForNavigation
					addModalFormTrue={props.addModalFormTrue}
					deleteItem={deleteItem}
					addProduct={addProduct}
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
					sessionCount={props.sessionCount}
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
		stocksThunk,
		deleteItemThunk
	}),
	withRouter
)(Stocks_Container);
