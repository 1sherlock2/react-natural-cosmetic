import React from 'react';
import Stock from './Stock';
import { connect } from 'react-redux';

const Stock_Container = (props) => {
	return <Stock items={props.items} />;
};

let mapStateToProps = (state) => {
	return {
		items: state.stocksContainerData.items
	};
};

export default connect(mapStateToProps, {})(Stock_Container);
