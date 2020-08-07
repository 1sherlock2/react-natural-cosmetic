const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const WrapperImgContent = new Schema({
	wrapperImgContent: [{ src: String }],
	content: [{ src: String }],
	navigationProduct: [{ children: String }],
	stocksMain: [{ image: String, text: String, oldPrice: Number, newPrice: Number }],
	adversitingStock: [{ src: String }]
});

var WrapperImgContent = (exports.WrapperImgContent = mongoose.model(' WrapperImgContent', MainContentSchema));
