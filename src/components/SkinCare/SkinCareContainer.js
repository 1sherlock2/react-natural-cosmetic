import React from 'react';
import SkinCare from './SkinCare';
import { connect } from 'react-redux';

const SkinCare_Container = (props) => {
	return <SkinCare skinCare={this.props.skinCare} />;
};

let mapStateToProps = (state) => {
	return {
		skinCare: state.skinCareData.skinCare
	};
};

export default connect(mapStateToProps, {})(SkinCare_Container);
