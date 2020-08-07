const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const AuthSchema = new Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true, minlength: 8 }
});

var AuthModel = (exports.LoginModel = mongoose.model('Auth', AuthSchema));

// module.exports = LoginModel;
