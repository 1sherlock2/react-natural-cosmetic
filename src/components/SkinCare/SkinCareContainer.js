import React from 'react';
import SkinCare from './SkinCare';
import { connect } from 'react-redux';

const SkinCare_Container = (props) => {
	return <SkinCare />;
};

let mapStateToProps = (state) => {
	return {
		...state
	};
};

export default connect(mapStateToProps, {})(SkinCare_Container);
