import React from 'react';
import { connect } from 'react-redux';
import Men from './Men';

const Men_Container = (props) => {
	return <Men men={this.props.men} />;
};
let mapStateToProps = (state) => {
	return {
		men: state.menData.men
	};
};

export default connect(mapStateToProps, {})(Men_Container);
