import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:4000',
	withCredentials: true
});

export const API = {
	mainAPI() {
		return instance.get('/products/mainContent/wrapperImgContent');
	},
	authAPI(values) {
		return instance.post('/auth', values);
	},
	authRegisterAPI(values) {
		return instance.post('/auth', values);
	},
	stocksAPI() {
		return instance.get('/products/stocks');
	},
	koreaAPI() {
		return instance.get('/products/korea');
	},
	perfumeryAPI() {
		return instance.get('/products/perfumery');
	},
	skinCareAPI() {
		return instance.get('/products/skinCare');
	},
	makeUpAPI() {
		return instance.get('/products/makeUp');
	},
	menAPI() {
		return instance.get('/products/men');
	},
	accessoriesAPI() {
		return instance.get('/products/accessories');
	},
	kidsAPI() {
		return instance.get('/products/kids');
	},
	giftAPI() {
		return instance.get('/products/gift');
	},
	wrapperImgContentAPI() {
		return instance.get('/mainContent/wrapperImgContent');
	}
};
