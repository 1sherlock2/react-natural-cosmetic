import React, { useState } from 'react';
import Stocks from './Stocks';
import { connect } from 'react-redux';

const Stocks_Container = (props) => {
	const defaultProps = {
		img: 'https://images.unsplash.com/photo-1594651103761-4c88c06a7abe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=800',
		stocksInformation: 'Today we are presentation new collections stock available'
	};

	const [activePriceDifferent, setActivePriceDifferent] = useState(props.product.types[0]);
	const selectItem = (index) => {
		setActivePriceDifferent(index);
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
			{/* <Stocks /> */}
		</div>
	);
};

let mapStateToProps = (state) => {
	return {
		items: state.stocksData.items,
		product: state.stocksData.product
	};
};

export default connect(mapStateToProps, {})(Stocks_Container);
