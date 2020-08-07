const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const auth = require('./controllers/AuthController');
const mainContent = require('./controllers/ProductsController');
const stocks = require('./controllers/StocksController');
const app = express();
const config = require('config');
const path = require('path');

const PORT = config.get('port');

let urlencodedFalse = bodyParser.urlencoded({ extended: true });
let bodyParserJsonTrue = bodyParser.json({
	inflate: true,
	strict: true
});

app.use(cors({ credentials: true, origin: true }));

// routers
app.use('/auth', urlencodedFalse, bodyParserJsonTrue, auth);
app.use('/products', urlencodedFalse, bodyParserJsonTrue, mainContent);
// app.use('/stocks', urlencodedFalse, bodyParserJsonTrue, stocks);

// if (process.env.NODE_ENV === 'production') {
// 	app.use('/', express.static(path.join(__dirname, 'mern_study_react', 'build')));
// 	app.get('*', (req, res) => {
// 		res.sendFile(path.resolve(__dirname, 'mern_study_react', 'build', 'index.html'));
// 	});
// }

mongoose.connect(config.get('mongoUri'), {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
	useCreateIndex: true
});

app.listen(PORT, () => {
	console.log(`server was started in ${PORT} port`);
});
