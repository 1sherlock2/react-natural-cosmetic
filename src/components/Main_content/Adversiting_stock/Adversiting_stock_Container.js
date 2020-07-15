import React from 'react';
import Adversiting_stock from './Adversiting_stock';

const Adversiting_stock_Container = (props) => {
	const items = [
		{ id: 1, url: '#', src: 'app/img/adversiting_stock1.jpg' },
		{ id: 2, url: '#', src: 'app/img/adversiting_stock2.jpg' },
		{ id: 3, url: '#', src: 'app/img/adversiting_stock3.jpg' },
		{ id: 4, url: '#', src: 'app/img/adversiting_stock4.jpg' }
	];

	return <Adversiting_stock items={items} />;
};

export default Adversiting_stock_Container;
