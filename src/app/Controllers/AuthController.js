const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const model = mongoose.model("User");

class AuthController {
  login = async (req, res) => {
    try {
      const user = await model.findOne({ email: req.body.email });
      const match = await bcrypt.compareSync(req.body.password, user.password);

      let token;
      if (!match) {
        res.status(401).send({ error: "error", message: "Password mismatch" });
        token = jwt.sign({ user_id: user._id }, process.env.AUTH_SECRET, {
          expiresIn: "3h",
        });
      }

      res.status(200).json({
        _id: user._id,
        nickname: user.nickname,
        username: user.username,
        photo: user.photo,
        email: user.email,
        token: token,
      });
    } catch (error) {
      res
        .status(401)
        .json({ error: error, message: "Error, user does not exists" });
    }
  };

  verifyToken = (req, res, next) => {
    const token = req.get("Authorization");
    if (token) {
      try {
        let decoded = jwt.verify(token, process.env.AUTH_SECRET);
        req.user = decoded;
        next();
      } catch (error) {
        res.status(401).json({ error: error, message: "Invalid Token" });
      }
    } else {
      res.status(401).json("Token is required");
    }
  };
}

module.exports = new AuthController();
