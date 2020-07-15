import React from 'react';
import Stocks from './Stocks';
import { connect } from 'react-redux';

const Stocks_Container = (props) => {
	return <Stocks />;
};

let mapStateToProps = (state) => {
	return {
		...state
	};
};

export default connect(mapStateToProps, {})(Stocks_Container);
