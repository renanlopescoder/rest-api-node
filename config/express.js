const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const consign = require('consign');
const server = express();

server.use(bodyParser.json());
server.set('secret', 'opensecret');
server.use(cors({ origin: '*' }));

consign('/src')
.include("models")
.then("actions")
.then("routes/auth.js")
.then("routes")
.into(server);

module.exports = server;
