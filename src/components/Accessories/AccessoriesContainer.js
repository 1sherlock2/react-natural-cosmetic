import React from 'react';
import { connect } from 'react-redux';
import Accessories from './Accessories';

const Accessories_Container = (props) => {
	return <Accessories accessories={this.props.accessories} />;
};

let mapStateToProps = (state) => {
	return {
		accessories: state.accessoriesData.accessories
	};
};

export default connect(mapStateToProps, {})(Accessories_Container);
