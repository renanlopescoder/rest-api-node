const express = require("express");
const bodyParser = require("body-parser");
const consign = require("consign");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = require("../../swagger");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json",
  );
  next();
});
app.use(bodyParser.json());
app.set("secret", "opensecret");

const specs = swaggerJsdoc(swaggerOptions);
app.use("/docs", swaggerUi.serve);
app.get("/docs", swaggerUi.setup(specs, { explorer: true }));

consign({ cwd: process.cwd() + "/src" })
  .include("app/Models")
  .then("app/Controllers")
  .then("app/Middleware/AuthMiddleware.js")
  .then("routes")
  .into(app);

module.exports = app;
