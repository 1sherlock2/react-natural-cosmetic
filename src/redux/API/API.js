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
	authAPI(values) {
		return instance.post('/api/auth', values);
	},
	authRegisterAPI(values) {
		return instance.post('/api/register', values);
	},

	//stocks
	stocksAPI() {
		return instance.get('/products/stocks');
	},
	postStocksAPI(values) {
		const data = new FormData();
		data.append('name', values.name);
		data.append('price', values.price);
		data.append('img', values.img);
		data.append('description', values.description);
		data.append('brend', values.brend);
		return instance.post('/products/stocks', data, { headers: { 'Content-Type': 'multipart/form-data' } });
	},
	deleteStockItemAPI(id) {
		return instance.delete(`/products/stocks/${id}`);
	},

	// korea
	koreaAPI() {
		return instance.get('/products/korea');
	},
	postKoreaAPI(values) {
		const data = new FormData();
		data.append('name', values.name);
		data.append('price', values.price);
		data.append('img', values.img);
		data.append('description', values.description);
		data.append('brend', values.brend);
		return instance.post('/products/korea', data, { headers: { 'Content-Type': 'multipart/form-data' } });
	},
	deleteKoreaItemAPI(id) {
		return instance.delete(`/products/korea/${id}`);
	},

	//perfumery
	perfumeryAPI() {
		return instance.get('/products/perfumery');
	},
	postPerfumeryAPI(values) {
		const data = new FormData();
		data.append('name', values.name);
		data.append('price', values.price);
		data.append('img', values.img);
		data.append('description', values.description);
		data.append('brend', values.brend);
		return instance.post('/products/korea', data, { headers: { 'Content-Type': 'multipart/form-data' } });
	},
	deletePerfumeryItemAPI(id) {
		return instance.delete(`/products/perfumery/${id}`);
	},

	//skinCare
	skinCareAPI() {
		return instance.get('/products/skinCare');
	},
	postSkinCareAPI(values) {
		const data = new FormData();
		data.append('name', values.name);
		data.append('price', values.price);
		data.append('img', values.img);
		data.append('description', values.description);
		data.append('brend', values.brend);
		return instance.post('/products/skinCare', data, { headers: { 'Content-Type': 'multipart/form-data' } });
	},
	deleteSkinCareItemAPI(id) {
		return instance.delete(`/products/skinCare/${id}`);
	},

	//makeUp
	makeUpAPI() {
		return instance.get('/products/makeUp');
	},
	postMakeUpAPI(values) {
		const data = new FormData();
		data.append('name', values.name);
		data.append('price', values.price);
		data.append('img', values.img);
		data.append('description', values.description);
		data.append('brend', values.brend);
		return instance.post('/products/makeUp', data, { headers: { 'Content-Type': 'multipart/form-data' } });
	},
	deleteMakeUpItemAPI(id) {
		return instance.delete(`/products/makeUp/${id}`);
	},

	//men
	menAPI() {
		return instance.get('/products/men');
	},
	postMenAPI(values) {
		const data = new FormData();
		data.append('name', values.name);
		data.append('price', values.price);
		data.append('img', values.img);
		data.append('description', values.description);
		data.append('brend', values.brend);
		return instance.post('/products/men', data, { headers: { 'Content-Type': 'multipart/form-data' } });
	},
	deleteMenItemAPI(id) {
		return instance.delete(`/products/men/${id}`);
	},

	//accessories
	accessoriesAPI() {
		return instance.get('/products/accessories');
	},
	postAccessoriesAPI(values) {
		const data = new FormData();
		data.append('name', values.name);
		data.append('price', values.price);
		data.append('img', values.img);
		data.append('description', values.description);
		data.append('brend', values.brend);
		return instance.post('/products/accessories', data, { headers: { 'Content-Type': 'multipart/form-data' } });
	},
	deleteAccessoriesItemAPI(id) {
		return instance.delete(`/products/accessories/${id}`);
	},

	// kids
	kidsAPI() {
		return instance.get('/products/kids');
	},
	postKidsAPI(values) {
		const data = new FormData();
		data.append('name', values.name);
		data.append('price', values.price);
		data.append('img', values.img);
		data.append('description', values.description);
		data.append('brend', values.brend);
		return instance.post('/products/kids', data, { headers: { 'Content-Type': 'multipart/form-data' } });
	},
	deleteKidsItemAPI(id) {
		return instance.delete(`/products/kids/${id}`);
	},

	// gift
	giftAPI() {
		return instance.get('/products/gift');
	},
	postGiftAPI(values) {
		const data = new FormData();
		data.append('name', values.name);
		data.append('price', values.price);
		data.append('img', values.img);
		data.append('description', values.description);
		data.append('brend', values.brend);
		return instance.post('/products/gift', data, { headers: { 'Content-Type': 'multipart/form-data' } });
	},
	deleteGiftItemAPI(id) {
		return instance.delete(`/products/gift/${id}`);
	},

	// mainContent
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
};
