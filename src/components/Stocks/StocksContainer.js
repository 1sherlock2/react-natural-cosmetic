import React from 'react';
import Stocks from './Stocks';
import { connect } from 'react-redux';

const Stocks_Container = (props) => {
	return <Stocks stocks={this.props.stocks} />;
};

let mapStateToProps = (state) => {
	return {
		stocks: state.stocksData.stocks
	};
};

export default connect(mapStateToProps, {})(Stocks_Container);
