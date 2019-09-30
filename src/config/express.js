const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const consign = require("consign");
const server = express();

const allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  // intercept OPTIONS method
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
};

server.use(allowCrossDomain());
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
