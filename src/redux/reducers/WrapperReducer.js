const initialState = {
	onRegister: false,
	items: [
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
	]
};

export const wripperReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ON_TOGGLE_REGISTER':
			return {
				...state,
				onRegister: !state.onRegister
			};
		default:
			return {
				...state
			};
	}
};

export const onToggleRegister = () => ({ type: 'ON_TOGGLE_REGISTER' });
