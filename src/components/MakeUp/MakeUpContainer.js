import React from 'react';
import { connect } from 'react-redux';
import MakeUp from './MakeUp';

const MakeUp_Container = (props) => {
	return <MakeUp makeUp={this.props.makeUp} />;
};
let mapStateToProps = (state) => {
	return {
		makeUp: state.makeUpData.makeUp
	};
};

export default connect(mapStateToProps, {})(MakeUp_Container);
