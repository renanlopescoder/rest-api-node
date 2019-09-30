const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const consign = require("consign");
const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.set("secret", "opensecret");

consign({ cwd: process.cwd() + "/src" })
  .include("app/Models")
  .then("app/Controllers")
  .then("app/Middleware/AuthMiddleware.js")
  .then("routes")
  .into(app);

module.exports = app;
