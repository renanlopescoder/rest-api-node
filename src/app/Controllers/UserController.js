"use strict";

const mongoose = require("mongoose");
const mailService = require("../Services/Mail");
const bcrypt = require("bcrypt");
const { rounds } = require("../Constants/auth");
const model = mongoose.model("User");
const transporter = mailService.config();

class UserController {
  constructor() {
    this.createUser = this.createUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  hashPassword(password) {
    const saltRounds = bcrypt.genSaltSync(rounds);
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    return hashedPassword;
  };

  sendWelcomeEmail(email) {
    const content = mailService.content(email);
    transporter.sendMail(content);
  };

  async getAllUsers(req, res) {
    try {
      const users = await model.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async createUser(req, res) {
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

  async updateUser(req, res) {
    const user = req.body;
    try {
      user.password = this.hashPassword(password);
      await model.findByIdAndUpdate(req.params.id, user);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json(error);
    }
  };

  async searchUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await model.findById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json(error);
    }
  };

  async deleteUserById(req, res) {
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
