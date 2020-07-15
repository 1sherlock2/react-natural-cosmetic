import React from 'react';
import Stock from './Stock';

const Stock_Container = (props) => {
	// const items = [
	// 	'Zo Skin health ossential daily power defense. Ежедневное защитное средство, 50мл',
	// 	'Zo*Skin health effects expliating polish anti-aging formula',
	// 	'3',
	// 	'Weekend',
	// 	'Nina',
	// 	'Bright Crystal',
	// 	'Стойкая база под макияж глаз',
	// 	'Блеск, выравнивающий кожу губ Eclat Minute'
	// ];

	const items = [
		{
			id: 1,
			image: '../../img/stock1.jpg',
			text: 'Zo Skin health ossential daily power defense. Ежедневное защитное средство, 50мл',
			oldPrice: 11000,
			newPrice: 8050,
			url: '#',
			alt: ''
		},
		{
			id: 2,
			image: '../../img/stock2.jpg',
			text: 'Zo*Skin health effects expliating polish anti-aging formula',
			oldPrice: 5250,
			newPrice: 4075,
			url: '#',
			alt: ''
		},
		{
			id: 3,
			image: '../../img/stock3.jpg',
			text: '3',
			oldPrice: 5250,
			newPrice: 4075,
			url: '#',
			alt: ''
		},
		{
			id: 4,
			image: '../../img/stock4.jpg',
			text: '3',
			oldPrice: 5250,
			newPrice: 4075,
			url: '#',
			alt: ''
		},
		{
			id: 5,
			image: '../../img/stock5.jpg',
			text: '3',
			oldPrice: 5250,
			newPrice: 4075,
			url: '#',
			alt: ''
		},
		{
			id: 6,
			image: '../../img/stock6.jpg',
			text: 'Weekend',
			oldPrice: 5250,
			newPrice: 4075,
			url: '#',
			alt: ''
		},
		{
			id: 7,
			image: '../../img/stock7.jpg',
			text: 'Nina',
			oldPrice: 5250,
			newPrice: 4075,
			url: '#',
			alt: ''
		},
		{
			id: 8,
			image: '../../img/stock8.jpg',
			text: 'Bright Crystal',
			oldPrice: 5250,
			newPrice: 4075,
			url: '#',
			alt: ''
		}
	];

	return <Stock items={items} />;
};

export default Stock_Container;
