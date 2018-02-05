const express = require('express');
const bodyParser = require('body-parser');
const load = require('express-load');
const cors = require('cors');
const server = express();

server.use(bodyParser.json());
server.set('secret', 'opensecret');
server.use(cors({ origin: '*' }));

load('src/models')
	.then('src/actions')
	.then('src/routes/auth.js')
	.then('src/routes')
	.into(server);

module.exports = server;
