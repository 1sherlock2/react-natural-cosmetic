import React from 'react';
import { connect } from 'react-redux';
import Accessories from './Accessories';

const Accessories_Container = (props) => {
	return <Accessories />;
};

let mapStateToProps = (state) => {
	return {
		...state
	};
};

export default connect(mapStateToProps, {})(Accessories_Container);
