import React from 'react';
import { connect } from 'react-redux';
import Kids from './Kids';

const Kids_Container = (props) => {
	return <Kids kids={this.props.kids} />;
};

let mapStateToProps = (state) => {
	return {
		kids: state.kidsData.kids
	};
};

export default connect(mapStateToProps, {})(Kids_Container);
