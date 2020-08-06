import React from 'react';
import Wrapper_navigation from './Wrapper_navigation';

const Wrapper_navigation_Container = (props) => {
	const items = [
		{ id: 1, url: '/stocks', children: 'Акции' },
		{ id: 2, url: '/korea', children: 'Korea' },
		{ id: 3, url: '/perfumery', children: 'Парфюмерия' },
		{ id: 4, url: '/skincare', children: 'Уход за кожей' },
		{ id: 5, url: '/makeUp', children: 'Уход за волосами' },
		{ id: 6, url: '/men', children: 'Мужчинам' },
		{ id: 7, url: '/accessories', children: 'Аксессуары' },
		{ id: 8, url: '/kids', children: 'Детям' },
		{ id: 9, url: '/gift', children: 'Подарки' },
		{ id: 10, url: '/brends', children: 'Бренды' }
	];
	return <Wrapper_navigation items={items} />;
};

export default Wrapper_navigation_Container;
