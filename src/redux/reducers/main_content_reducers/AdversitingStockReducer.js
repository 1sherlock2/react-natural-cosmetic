let initialState = {
	items: [
		{ id: 1, url: '#', src: 'app/img/adversiting_stock1.jpg' },
		{ id: 2, url: '#', src: 'app/img/adversiting_stock2.jpg' },
		{ id: 3, url: '#', src: 'app/img/adversiting_stock3.jpg' },
		{ id: 4, url: '#', src: 'app/img/adversiting_stock4.jpg' }
	]
};

export const adversitingStockReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return {
				...state
			};
	}
};
