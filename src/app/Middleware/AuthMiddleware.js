module.exports = (src) => {
  const { AuthController, UserController } = src.app.Controllers;

  src.post("/login", AuthController.login);
  src.post("/users/create", UserController.createUser);
  // Private Routes
  src.use("/*", AuthController.verifyToken);
};
