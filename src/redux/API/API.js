import * as axios from 'axios';

const instance = axios.create({});

export const API = {
	stocksAPI() {
		return axios.get('http://localhost:3000/data.json');
	},
	koreaAPI() {
		return axios.get('http://localhost:3000/data.json');
	}
};
