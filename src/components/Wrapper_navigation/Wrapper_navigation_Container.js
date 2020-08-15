import React from 'react';
import Wrapper_navigation from './Wrapper_navigation';
import { connect } from 'react-redux';

const Wrapper_navigation_Container = (props) => {
	return <Wrapper_navigation items={props.items} />;
};

let mapStateToProps = (state) => ({
	items: state.wrapperData.items
});

export default connect(mapStateToProps, {})(Wrapper_navigation_Container);
