let initialState = {
	items: [
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
	]
};

export const stocksContainerReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return {
				...state
			};
	}
};
