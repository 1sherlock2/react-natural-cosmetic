import React from 'react';
import Content from './Content';
import { connect } from 'react-redux';

const Content_Container = (props) => {
	const items = [
		{
			id: 1,
			url: '#',
			src: 'img/content1.jpg'
		},
		{
			id: 2,
			url: '#',
			src: 'img/content2.jpg'
		},
		{
			id: 3,
			url: '#',
			src: 'img/content3.jpg'
		},
		{
			id: 4,
			url: '#',
			src: 'img/content4.jpg'
		},
		{
			id: 5,
			url: '#',
			src: 'img/content5.jpg'
		},
		{
			id: 6,
			url: '#',
			src: 'img/content6.jpg'
		}
	];

	return <Content items={props.items} />;
};

let mapStateToProps = (state) => {
	return {
		items: state.contentData.items
	};
};

export default connect(mapStateToProps, {})(Content_Container);
