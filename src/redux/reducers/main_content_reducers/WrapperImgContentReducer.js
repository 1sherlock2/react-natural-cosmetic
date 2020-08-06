let initialState = {
	items: [
		{ id: 1, url: '#', src: './img/content1.jpg' },
		{ id: 1, url: '#', src: './img/content2.jpg' },
		{ id: 1, url: '#', src: './img/content3.jpg' },
		{ id: 1, url: '#', src: './img/content4.jpg' },
		{ id: 1, url: '#', src: './img/content5.jpg' },
		{ id: 1, url: '#', src: './img/content6.jpg' }
	]
};

export const wrapperImgContentReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return {
				state
			};
	}
};
