/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * path:
 *  /users/create:
 *    post:
 *      summary: Create a new user
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        "200":
 *          description: A user schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */

module.exports = (src) => {
  const { UserController } = src.app.Controllers;

  src.post("/users/create", UserController.createUser);

  src.put("/users/update/:id", UserController.updateUser);

  src.delete("/users/delete/:id", UserController.deleteUserById);
};
