import React from 'react';
import { connect } from 'react-redux';
import Perfumery from './Perfumery';

const Perfumery_Container = (props) => {
	return <Perfumery perfumery={this.props.perfumery} />;
};

let mapStateToProps = (state) => {
	return {
		stocks: state.stocksData.stocks
	};
};

export default connect(mapStateToProps, {})(Perfumery_Container);
