//mainContentModels
const { WrapperImgContentModel } = require('../models/products/mainContent/WrapperImgContentModel');
const { ContentModel } = require('../models/products/mainContent/ContentModel');
const { NavigationProductModel } = require('../models/products/mainContent/NavigationProductModel');
const { StocksMainModel } = require('../models/products/mainContent/StocksMainModel');
const { AdversitingStockModel } = require('../models/products/mainContent/AdversitingStockModel');
//productsModels
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

// image storage
const multer = require('multer');
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, new Date().toISOString() + file.originalname);
	}
});
const fileFilter = (req, file, cb) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
		cb(null, true);
	} else {
		cb(null, false);
	}
};
const upload = multer({ storage: storage, fileSize: 1024 * 1024 * 5, fileFilter: fileFilter });
router.post('/stocks', upload.single('img'), (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new StocksModel({
			name: data.name,
			img: req.file.path,
			description: data.description,
			price: data.price,
			reviews: data.reviews,
			brend: data.brend
		});
		post.save().then(() => {
			res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
			res.status(200).json({ post });
		});
	} catch (e) {
		console.log(e.message);
	}
});
//wrapperImgContent
router.post('/wrapperImgContent', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new WrapperImgContentModel({
			src: data.src
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/wrapperImgContent', (req, res) => {
	WrapperImgContentModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

//content
router.post('/content', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new ContentModel({
			src: data.src
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/content', (req, res) => {
	ContentModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

//navigationProduct
router.post('/navigationProduct', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new NavigationProductModel({
			children: data.children
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/navigationProduct', (req, res) => {
	NavigationProductModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

//stocksMain
router.post('/stocksMain', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new StocksMainModel({
			image: data.image,
			text: data.text,
			oldPrice: data.oldPrice,
			newPrice: data.newPrice
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/stocksMain', (req, res) => {
	StocksMainModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

//adversitingStock
router.post('/adversitingStock', (req, res) => {
	try {
		const data = req.body;
		console.log(data);
		const post = new AdversitingStockModel({
			src: data.src
		});
		post.save().then(() => {
			res.status(200).json({ post });
		});
	} catch (e) {}
});

router.get('/adversitingStock', (req, res) => {
	AdversitingStockModel.find().then((items) => {
		res.status(200).json({ items });
	});
});

//stocks
// router.post('/stocks', upload.single('img'), (req, res) => {
// 	try {
// 		const data = req.body;
// 		console.log(req.file.path);
// 		const post = new StocksModel({
// 			name: data.name,
// 			img: req.file.path,
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
