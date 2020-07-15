import React from 'react';
import { connect } from 'react-redux';
import Men from './Men';

const Men_Container = (props) => {
	return <Men />;
};
let mapStateToProps = (state) => {
	return {
		...state
	};
};

export default connect(mapStateToProps, {})(Men_Container);
