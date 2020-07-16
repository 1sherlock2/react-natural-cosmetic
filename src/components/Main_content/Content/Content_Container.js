import React from 'react';
import Content from './Content';

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

	return <Content items={items} />;
};

export default Content_Container;
