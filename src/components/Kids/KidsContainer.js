import React from 'react';
import { connect } from 'react-redux';
import Kids from './Kids';

const Kids_Container = (props) => {
	return <Kids />;
};

let mapStateToProps = (state) => {
	return {
		...state
	};
};

export default connect(mapStateToProps, {})(Kids_Container);
