import React from 'react';
import Wrapper_img_content from './Wrapper_img_content';
import { connect } from 'react-redux';

const Wrapper_img_content_Container = (props) => {
	return <Wrapper_img_content items={props.items} />;
};

let mapStateToProps = (state) => {
	return {
		items: state.wrapperImgContentData.items
	};
};

export default connect(mapStateToProps, {})(Wrapper_img_content_Container);
