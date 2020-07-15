import React from 'react';
import { connect } from 'react-redux';
import Korea from './Korea';

const Korea_Container = (props) => {
	return <Korea korea={this.props.korea} />;
};

let mapStateToProps = (state) => {
	return {
		korea: state.koreaData.korea
	};
};

export default connect(mapStateToProps, {})(Korea_Container);
