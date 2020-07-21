import React from 'react';
import Adversiting_stock from './Adversiting_stock';
import { connect } from 'react-redux';

const Adversiting_stock_Container = (props) => {
	return <Adversiting_stock items={props.items} />;
};

let mapStateToProps = (state) => {
	return {
		items: state.adversitingStockData.items
	};
};

export default connect(mapStateToProps, {})(Adversiting_stock_Container);
