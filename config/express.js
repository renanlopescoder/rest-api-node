var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var load = require('express-load');
var cors = require('cors');

app.use(cors({origin: '*'}));

app.set('secret', 'opensecret');

load('app/models')
	.then('app/api')
	.then('app/routes/auth.js')
	.then('app/routes')
	.into(app);

	module.exports = app;

