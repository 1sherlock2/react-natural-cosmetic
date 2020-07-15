import React from 'react';
import Navigation_product from './Navigation_product';

const Navigation_product_Container = (props) => {
	let items = [
		{ id: 1, url: '#', children: 'Для вас' },
		{ id: 2, url: '#', children: 'Бестселлеры' },
		{ id: 3, url: '#', children: 'Новенькое' },
		{ id: 4, url: '#', children: 'Идеи для подарк' }
	];
	return <Navigation_product items={items} />;
};

export default Navigation_product_Container;
