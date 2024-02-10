const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const consign = require("consign");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = require("../../swagger");

const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.set("secret", "opensecret");

const specs = swaggerJsdoc(swaggerOptions);
app.use("/docs", swaggerUi.serve);
app.get("/docs", swaggerUi.setup(specs, { explorer: true }));

consign({ cwd: process.cwd() + "/src" })
  .include("app/Models")
  .then("app/Controllers")
  .then("routes/public")
  .then("app/Middleware/AuthMiddleware.js")
  .then("routes/private")
  .into(app);

module.exports = app;
