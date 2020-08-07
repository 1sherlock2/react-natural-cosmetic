const { MainContentModel } = require('../models/products/MainContentModel');
const { ContentModel } = require('../models/products/ContentModel');
const { StocksMainModel } = require('../models/products/StocksMainModel');
const { AdversitingStockModel } = require('../models/products/AdversitingStockModel');
const { StocksModel } = require('../models/products/StocksModel');
const { KoreaModel } = require('../models/products/KoreaModel');
const { PerfumeryModel } = require('../models/products/PerfumeryModel');
const { SkinCareModel } = require('../models/products/SkinCareModel');
const { MakeUpModel } = require('../models/products/MakeUpModel');
const { MenModel } = require('../models/products/MenModel');
const { AccessoriesModel } = require('../models/products/AccessoriesModel');
const { KidsModel } = require('../models/products/KidsModel');
const { GiftModel } = require('../models/products/GiftModel');
const { Router } = require('express');
const router = Router();

//mainContent
router.post('/mainContent/wrapperImgContent', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new MainContentModel({
			wrapperImgContent: [{ url: data.url, src: data.src }]
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/mainContent/wrapperImgContent', (req, res) => {
	MainContentModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

//stocks
router.post('/stocks', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new StocksModel({
			name: data.name,
			img: data.img,
			description: data.description,
			price: data.price,
			reviews: data.reviews,
			brend: data.brend
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/stocks', (req, res) => {
	StocksModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

//korea
router.post('/korea', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new KoreaModel({
			name: data.name,
			img: data.img,
			description: data.description,
			price: data.price,
			reviews: data.reviews,
			brend: data.brend
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/korea', (req, res) => {
	KoreaModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

//makeUp
router.post('/makeUp', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new MakeUpModel({
			name: data.name,
			img: data.img,
			description: data.description,
			price: data.price,
			reviews: data.reviews,
			brend: data.brend
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/makeUp', (req, res) => {
	MakeUpModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

//perfumery
router.post('/perfumery', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new PerfumeryModel({
			name: data.name,
			img: data.img,
			description: data.description,
			price: data.price,
			reviews: data.reviews,
			brend: data.brend
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/perfumery', (req, res) => {
	PerfumeryModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

//skinCare
router.post('/skinCare', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new SkinCareModel({
			name: data.name,
			img: data.img,
			description: data.description,
			price: data.price,
			reviews: data.reviews,
			brend: data.brend
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/skinCare', (req, res) => {
	SkinCareModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

//men
router.post('/men', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new MenModel({
			name: data.name,
			img: data.img,
			description: data.description,
			price: data.price,
			reviews: data.reviews,
			brend: data.brend
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/men', (req, res) => {
	MenModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

//accessories
router.post('/accessories', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new AccessoriesModel({
			name: data.name,
			img: data.img,
			description: data.description,
			price: data.price,
			reviews: data.reviews,
			brend: data.brend
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/accessories', (req, res) => {
	AccessoriesModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

//kids
router.post('/kids', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new KidsModel({
			name: data.name,
			img: data.img,
			description: data.description,
			price: data.price,
			reviews: data.reviews,
			brend: data.brend
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/kids', (req, res) => {
	KidsModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

//gift
router.post('/gift', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new GiftModel({
			name: data.name,
			img: data.img,
			description: data.description,
			price: data.price,
			reviews: data.reviews,
			brend: data.brend
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/gift', (req, res) => {
	GiftModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

module.exports = router;
