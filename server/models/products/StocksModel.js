const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const StocksSchema = new Schema({
	date: { type: Date, default: Date.now() },
	name: String,
	img: String,
	description: String,
	price: Number,
	reviews: String,
	brend: String
});

var StocksModel = (exports.StocksModel = mongoose.model('Stocks', StocksSchema));
