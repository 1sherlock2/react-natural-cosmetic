const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router(path.join(__dirname, 'data.json'));

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);
server.use((req, res, next) => {});

server.listen(3001, () => {
	console.log('JSON server was  running');
});
