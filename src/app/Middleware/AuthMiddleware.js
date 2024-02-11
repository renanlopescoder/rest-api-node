/**
 * @swagger
 * paths:
 *   /login:
 *     post:
 *       summary: User login
 *       description: Authenticates a user and returns a token along with user details.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - email
 *                 - password
 *               properties:
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: User's email address.
 *                 password:
 *                   type: string
 *                   description: User's password.
 *       responses:
 *         200:
 *           description: Login successful, returns user details and token.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The user ID.
 *                   nickname:
 *                     type: string
 *                     description: The user's nickname.
 *                   username:
 *                     type: string
 *                     description: The user's username.
 *                   photo:
 *                     type: string
 *                     description: URL to the user's photo.
 *                   email:
 *                     type: string
 *                     format: email
 *                     description: The user's email address.
 *                   token:
 *                     type: string
 *                     description: Bearer token for authenticating future requests.
 *         401:
 *           description: Unauthorized, invalid email or password.
 */

module.exports = (src) => {
  const { AuthController } = src.app.Controllers;

  src.post("/login", AuthController.login);
  // Private Routes
  src.use("/*", AuthController.verifyToken);
};
