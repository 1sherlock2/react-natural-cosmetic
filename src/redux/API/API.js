import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3001',
	withCredentials: true
});

export const API = {
	mainAPI() {
		return instance.get('/mainContent');
	},
	authAPI(values) {
		return instance.post('/auth', values);
	},
	authRegisterAPI(values) {
		return instance.post('/auth', values);
	},
	stocksAPI() {
		return instance.get('/stocks');
	},
	koreaAPI() {
		return instance.get('/korea');
	},
	perfumeryAPI() {
		return instance.get('/perfumery');
	},
	skinCareAPI() {
		return instance.get('/skinCare');
	},
	makeUpAPI() {
		return instance.get('/makeUp');
	},
	menAPI() {
		return instance.get('/men');
	},
	accessoriesAPI() {
		return instance.get('/accessories');
	},
	kidsAPI() {
		return instance.get('/kids');
	},
	giftAPI() {
		return instance.get('/gift');
	},
	wrapperImgContentAPI() {
		return instance.get('/mainContent/wrapperImgContent');
	}
};
