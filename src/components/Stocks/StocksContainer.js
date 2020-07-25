import React, { useState, useEffect } from 'react';
import Stocks from './Stocks';
import { connect, useDispatch, useSelector } from 'react-redux';
import { stocksThunk, selectStockDispatch, sortStockByPrice, sortStockByBrend, sortStockDate } from '../../redux/reducers/StocksReducer';

const Stocks_Container = React.memo((props) => {
	const [activePriceDifferent, setActivePriceDifferent] = useState(null);
	const [categories, setCategories] = useState(['по цене', 'по бренду', 'по новизне']);
	const [defaultHeaderName, setDefaultHeaderName] = useState('сортировка');
	const [activeCategoried, setActiveCategoried] = useState(false);
	const [selectCategoriesItem, setSelectCategoriesItem] = useState(null);
	const [count, setCount] = useState(1);

	const selectCategoriesItemFunc = (element, index) => {
		setSelectCategoriesItem(index);
		if (element === 'по цене') {
			props.sortStockByPrice();
		}
		if (element === 'по бренду') {
			props.sortStockByBrend();
		}
		if (element === 'по новизне') {
			props.sortStockDate();
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
		props.stocksThunk();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const selectItem = (index) => {
		setActivePriceDifferent(index);
	};

	return (
		<div>
			<Stocks
				count={count}
				increaseCount={increaseCount}
				decreaseCount={decreaseCount}
				isLoaded={props.isLoaded}
				selectStockDispatch={props.selectStockDispatch}
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
		</div>
	);
});

let mapStateToProps = (state) => {
	return {
		product: state.stocksData.product,
		items: state.stocksData.items,
		isLoaded: state.stocksData.isLoaded
	};
};

export default connect(mapStateToProps, { stocksThunk, selectStockDispatch, sortStockByPrice, sortStockByBrend, sortStockDate })(Stocks_Container);
