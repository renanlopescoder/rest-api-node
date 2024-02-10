const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const model = mongoose.model("User");

const MailerService = require("../Services/Mail");

class UserController {
  hashPassword = (password) => {
    const saltRounds = bcrypt.genSaltSync(process.env.AUTH_ROUNDS);
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    return hashedPassword;
  };

  sendWelcomeEmail = (email) => {
    const content = MailerService.welcomeMailContent(email);
    MailerService.sendMail(content);
  };

  getAllUsers = async (_, res) => {
    try {
      const users = await model.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  createUser = async (req, res) => {
    const user = req.body;
    try {
      user.password = this.hashPassword(user.password);
      console.log(user.password);
      const newUser = await model.create(user);
      this.sendWelcomeEmail(user.email);
      res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

  updateUser = async (req, res) => {
    const user = req.body;
    try {
      user.password = this.hashPassword(user.password);
      await model.findByIdAndUpdate(req.params.id, user);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json(error);
    }
  };

  searchUserById = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await model.findById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json(error);
    }
  };

  deleteUserById = async (req, res) => {
    const { id } = req.params;
    try {
      await model.remove({ _id: id });
      res.status(200);
    } catch (error) {
      res.status(404).json(error);
    }
  };
}

module.exports = new UserController();
