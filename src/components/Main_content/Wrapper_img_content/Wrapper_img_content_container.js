import React from 'react';
import Wrapper_img_content from './Wrapper_img_content';

const Wrapper_img_content_Container = (props) => {
	const items = [
		{ id: 1, url: '#', src: './img/content1.jpg' },
		{ id: 1, url: '#', src: './img/content2.jpg' },
		{ id: 1, url: '#', src: './img/content3.jpg' },
		{ id: 1, url: '#', src: './img/content4.jpg' },
		{ id: 1, url: '#', src: './img/content5.jpg' },
		{ id: 1, url: '#', src: './img/content6.jpg' }
	];
	return <Wrapper_img_content items={items} />;
};

export default Wrapper_img_content_Container;
