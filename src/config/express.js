const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const consign = require("consign");
const server = express();

server.use(bodyParser.json());
server.set("secret", "opensecret");
server.use(cors({ origin: "*" }));

consign({ cwd: process.cwd() + "/src" })
  .include("app/Models")
  .then("app/Controllers")
  .then("app/Middleware/AuthMiddleware.js")
  .then("routes")
  .into(server);

module.exports = server;
