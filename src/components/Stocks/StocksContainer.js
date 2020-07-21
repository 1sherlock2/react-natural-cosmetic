import React, { useState, useEffect } from 'react';
import Stocks from './Stocks';
import { connect, useDispatch, useSelector } from 'react-redux';
import * as axios from 'axios';
import { stocksThunk } from '../../redux/reducers/StocksReducer';

const Stocks_Container = (props) => {
	const [activePriceDifferent, setActivePriceDifferent] = useState(props.product.types[0]);
	const selectItem = (index) => {
		setActivePriceDifferent(index);
	};
	useEffect(() => {
		props.stocksThunk();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const defaultProps = {
		img: 'https://images.unsplash.com/photo-1594651103761-4c88c06a7abe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=800',
		stocksInformation: 'Today we are presentation new collections stock available'
	};
	return (
		<div>
			<Stocks
				items={props.items}
				defaultProps={defaultProps}
				product={props.product}
				activePriceDifferent={activePriceDifferent}
				selectItem={selectItem}
			/>
		</div>
	);
};

let mapStateToProps = (state) => {
	return {
		product: state.stocksData.product,
		items: state.stocksData.items
	};
};

export default connect(mapStateToProps, { stocksThunk })(Stocks_Container);
