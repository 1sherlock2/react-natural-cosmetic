import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Korea from './Korea';
import { koreaThunk, selectKoreaDispatch, sortKoreaByPrice, sortKoreaByBrend, sortKoreaDate } from '../../redux/reducers/KoreaReducer';

const Korea_Container = (props) => {
	const [activePriceDifferent, setActivePriceDifferent] = useState(null);
	const [categories, setCategories] = useState(['по цене', 'по бренду', 'по новизне']);
	const [defaultHeaderName, setDefaultHeaderName] = useState('сортировка');
	const [activeCategoried, setActiveCategoried] = useState(false);
	const [selectCategoriesItem, setSelectCategoriesItem] = useState(null);
	const [count, setCount] = useState(1);

	const selectCategoriesItemFunc = (element, index) => {
		setSelectCategoriesItem(index);
		if (element === 'по цене') {
			props.sortKoreaByPrice();
		}
		if (element === 'по бренду') {
			props.sortKoreaByBrend();
		}
		if (element === 'по новизне') {
			props.sortKoreaDate();
		}
		setDefaultHeaderName(element);
	};

	if (count <= 0) {
		setCount(1);
	}
	const decreaseCount = () => {
		setCount(count - 1);
	};

	const increaseCount = () => {
		setCount(count + 1);
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
	};
	return (
		<Korea
			count={count}
			increaseCount={increaseCount}
			decreaseCount={decreaseCount}
			isLoaded={props.isLoaded}
			selectKoreaDispatch={props.selectKoreaDispatch}
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
		/>
	);
};
let mapStateToProps = (state) => {
	return {
		items: state.koreaData.items,
		product: state.koreaData.product
	};
};
export default connect(mapStateToProps, { koreaThunk, selectKoreaDispatch, sortKoreaByPrice, sortKoreaByBrend, sortKoreaDate })(Korea_Container);
