import React from 'react';
import { connect } from 'react-redux';
import Perfumery from './Perfumery';

const Perfumery_Container = (props) => {
	return <Perfumery />;
};

let mapStateToProps = (state) => {
	return {
		...state
	};
};

export default connect(mapStateToProps, {})(Perfumery_Container);
