import React from 'react';
import { connect } from 'react-redux';
import Gift from './Gift';

const Gift_Container = (props) => {
	return <Gift gift={this.props.gift} />;
};

let mapStateToProps = (state) => {
	return {
		gift: state.giftData.gift
	};
};

export default connect(mapStateToProps, {})(Gift_Container);
