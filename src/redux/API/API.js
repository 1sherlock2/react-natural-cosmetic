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
	}
};
