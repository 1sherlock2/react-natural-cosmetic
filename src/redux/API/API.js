import * as axios from 'axios';

const instance = axios.create({});

export const API = {
	stocksAPI() {
		return axios.get('http://localhost:3001/stocks');
	},
	koreaAPI() {
		return axios.get('http://localhost:3001/korea');
	}
};
