// const { StocksModel } = require('../models/products/StocksModel');
// const { Router } = require('express');
// const router = Router();

// //stocks
// router.post('/post', (req, res) => {
// 	try {
// 		const data = req.body;
// 		console.log(data);
// 		const post = new StocksModel({
// 			name: data.name,
// 			img: data.img,
// 			description: data.description,
// 			price: data.price,
// 			reviews: data.reviews,
// 			brend: data.brend
// 		});
// 		post.save().then(() => {
// 			res.status(200).json({ post });
// 		});
// 	} catch (e) {}
// });

// router.get('/get', (req, res) => {
// 	StocksModel.find().then((items) => {
// 		res.status(200).json({ items });
// 	});
// });

// module.exports = router;
