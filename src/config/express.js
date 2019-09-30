const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const consign = require("consign");
const app = express();

// const allowCrossDomain = (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization, Content-Length, X-Requested-With"
//   );

//   // intercept OPTIONS method
//   if ("OPTIONS" == req.method) {
//     res.send(200);
//   } else {
//     next();
//   }
// };

// app.all("*", function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

// app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.enable("trust proxy");
app.use(bodyParser.json());
app.set("secret", "opensecret");

consign({ cwd: process.cwd() + "/src" })
  .include("app/Models")
  .then("app/Controllers")
  .then("app/Middleware/AuthMiddleware.js")
  .then("routes")
  .into(app);

module.exports = app;
