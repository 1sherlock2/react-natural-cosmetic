import * as axios from 'axios';

// const headers = Object.assign({}, { 'content-type': 'application/json' }, this.getHeaders(), { 'Content-Type': 'multipart/form-data' });
const instance = axios.create({
	baseURL: 'http://localhost:4000',
	withCredentials: true,
	headers: {
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
		Accept: 'application/json, text/plain, */*'
	}
});

export const API = {
	postStocksAPI(values) {
		console.log(`values: ${values}`);
		const data = new FormData();
		data.append('name', values.name);
		data.append('price', values.price);
		data.append('img', values.img);
		data.append('description', values.description);
		data.append('brend', values.brend);
		console.log(`data: ${data}`);
		return instance.post('/products/stocks', data, { headers: { 'Content-Type': 'multipart/form-data' } });
	},
	mainAPI() {
		return instance.get('/products/mainContent/wrapperImgContent');
	},
	authAPI(values) {
		return instance.post('/api/auth', values);
	},
	authRegisterAPI(values) {
		return instance.post('/api/register', values);
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
		return instance.get('/products/wrapperImgContent');
	},
	contentAPI() {
		return instance.get('/products/content');
	},
	navigationProductAPI() {
		return instance.get('/products/navigationProduct');
	},
	stockMainAPI() {
		return instance.get('/products/stocksMain');
	},
	adversitingStockAPI() {
		return instance.get('/products/adversitingStock');
	}
	// postStocksAPI(values) {
	// 	return instance.post('/products/stocks', values, { headers: { 'Content-Type': 'multipart/form-data' } });
	// }	// 	return instance.post('/products/stocks', values, { headers: { 'Content-Type': 'multipart/form-data' } });
	// }
};
// { headers: { 'Content-Type': 'multipart/form-data' } })
