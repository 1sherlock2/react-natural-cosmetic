const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const NavigationProductSchema = new Schema({
	navigationProduct: [{ children: String }]
});

var NavigationProductModel = (exports.NavigationProductModel = mongoose.model('NavigationProductSchema', NavigationProductSchema));
