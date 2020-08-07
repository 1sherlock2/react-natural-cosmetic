const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const ContentSchema = new Schema({
	content: [{ contentSrc: String }]
});

var ContentModel = (exports.ContentModel = mongoose.model('Content', ContentSchema));
