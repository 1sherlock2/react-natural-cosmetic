import React from 'react';
import { connect } from 'react-redux';
import MakeUp from './MakeUp';

const MakeUp_Container = (props) => {
	return <MakeUp />;
};
let mapStateToProps = (state) => {
	return {
		...state
	};
};

export default connect(mapStateToProps, {})(MakeUp_Container);
