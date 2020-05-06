/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - username
 *          - email
 *          - password
 *        properties:
 *          username:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *          password:
 *            type: string
 *          photo:
 *            type: string
 *            description: Image URL string
 *          nickname:
 *            type: string
 *        example:
 *           username: Renan
 *           email: fake@email.com
 *           password: 123456aa
 *           nickname: Dexter
 *           photo: https://photourl.com/image.png
 */

const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: false,
  },
  nickname: {
    type: String,
    required: false,
  },
});

mongoose.model("User", schema);
