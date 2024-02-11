const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const model = mongoose.model("User");

const MailerService = require("../Services/Mail");

class UserController {
  hashPassword = (password) => {
    const saltRounds = bcrypt.genSaltSync(Number(process.env.AUTH_ROUNDS));
    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    return hashedPassword;
  };

  sendWelcomeEmail = (email) => {
    const content = MailerService.welcomeMailContent(email);
    MailerService.sendMail(content);
  };

  getAllUsers = async (request, response) => {
    try {
      const users = await model.find({});

      return response.status(200).json(users);
    } catch (error) {
      return response.status(500).json(error);
    }
  };

  createUser = async (request, response) => {
    const user = request.body;
    try {
      user.password = this.hashPassword(user.password);

      const newUser = await model.create(user);
      this.sendWelcomeEmail(user.email);

      return response.status(200).json(newUser);
    } catch (error) {
      console.log(error);
      return response.status(500).json(error);
    }
  };

  updateUser = async (request, response) => {
    const userData = request.body;

    // request.user is the authenticated user id
    if (request.user !== request.params.id) {
      return response.status(401).send({
        error: "error",
        message: "Permission Denied...",
      });
    }

    try {
      userData.password = this.hashPassword(userData.password);

      await model.findByIdAndUpdate(request.params.id, userData);

      return response.status(200).json(user);
    } catch (error) {
      return response.status(404).json(error);
    }
  };

  searchUserById = async (request, response) => {
    const { id } = request.params;
    try {
      const user = await model.findById(id);

      let userResponse = Object.assign({}, user._doc);
      delete userResponse.password;

      return response.status(200).json(userResponse);
    } catch (error) {
      return response.status(404).json(error);
    }
  };

  deleteUserById = async (request, response) => {
    const { id } = request.params;
    try {
      await model.deleteOne({ _id: id });
      return response.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
      return response.status(404).json(error);
    }
  };
}

module.exports = new UserController();
