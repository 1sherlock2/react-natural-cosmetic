import React from 'react';
import Wrapper_navigation from './Wrapper_navigation';

const Wrapper_navigation_Container = (props) => {
	const items = [
		{ id: 1, url: '#', children: 'Акции' },
		{ id: 2, url: '#', children: 'Korea' },
		{ id: 3, url: '#', children: 'Парфюмерия' },
		{ id: 4, url: '#', children: 'Уход за кожей' },
		{ id: 5, url: '#', children: 'Уход за волосами' },
		{ id: 6, url: '#', children: 'Мужчинам' },
		{ id: 7, url: '#', children: 'Аксессуары' },
		{ id: 8, url: '#', children: 'Детям' },
		{ id: 9, url: '#', children: 'Подарки' },
		{ id: 10, url: '#', children: 'Бренды' }
	];
	return <Wrapper_navigation items={items} />;
};

export default Wrapper_navigation_Container;
