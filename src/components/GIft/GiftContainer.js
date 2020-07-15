import React from 'react';
import { connect } from 'react-redux';
import Gift from './Gift';

const Gift_Container = (props) => {
	return <Gift />;
};

let mapStateToProps = (state) => {
	return {
		...state
	};
};

export default connect(mapStateToProps, {})(Gift_Container);
