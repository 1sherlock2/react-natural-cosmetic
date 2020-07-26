import React, { useState, useEffect } from 'react';
import Stocks from './Stocks';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
	stocksThunk,
	selectStockDispatch,
	increasePriceDispatch,
	sortStockByPrice,
	sortStockByBrend,
	sortStockDate,
	decreasePriceDispatch
} from '../../redux/reducers/StocksReducer';
import ContentLoaderByComponent from '../Utils/ContentLoaderByComponent/ContentLoaderByComponent';

const Stocks_Container = React.memo((props) => {
	const [activePriceDifferent, setActivePriceDifferent] = useState(null);
	const [categories, setCategories] = useState(['по цене', 'по бренду', 'по новизне']);
	const [defaultHeaderName, setDefaultHeaderName] = useState('сортировка');
	const [activeCategoried, setActiveCategoried] = useState(false);
	const [selectCategoriesItem, setSelectCategoriesItem] = useState(null);
	let [count, setCount] = useState(1);

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

	// if (count <= 0) {
	// 	setCount(1);
	// }
	const decreaseCount = () => {
		setCount(--count);
		console.log(count);
		props.decreasePriceDispatch(count);
		console.log(props.product);
	};

	const increaseCount = () => {
		setCount(++count);
		console.log(count);
		props.increasePriceDispatch(count);
		// console.log(props.product);
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
	if (props.isLoding === false) {
		return <ContentLoaderByComponent />;
	} else {
		return (
			<div>
				<Stocks
					increasePriceDispatch={props.increasePriceDispatch}
					decreasePriceDispatch={props.decreasePriceDispatch}
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
	}
});

let mapStateToProps = (state) => {
	return {
		product: state.stocksData.product,
		items: state.stocksData.items,
		isLoaded: state.stocksData.isLoaded,
		isLoading: state.stocksData.isLoading,
		count: state.stocksData.count
	};
};

export default connect(mapStateToProps, {
	decreasePriceDispatch,
	increasePriceDispatch,
	stocksThunk,
	selectStockDispatch,
	sortStockByPrice,
	sortStockByBrend,
	sortStockDate
})(Stocks_Container);
