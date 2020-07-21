let initialState = {
	items: [
		{ id: 1, url: '#', children: 'Для вас' },
		{ id: 2, url: '#', children: 'Бестселлеры' },
		{ id: 3, url: '#', children: 'Новенькое' },
		{ id: 4, url: '#', children: 'Идеи для подарка' }
	]
};

export const navigationProductReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return {
				...state
			};
	}
};
