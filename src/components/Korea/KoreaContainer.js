import React from 'react';
import { connect } from 'react-redux';
import Korea from './Korea';

const Korea_Container = (props) => {
	return <Korea />;
};

let mapStateToProps = (state) => {
	return {
		...state
	};
};

export default connect(mapStateToProps, {})(Korea_Container);
