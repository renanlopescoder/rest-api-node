module.exports = src => {
  const { UserController } = src.app.Controllers;

  src.get("/users", UserController.getAllUsers);

  src.post("/users/create", UserController.createUser);

  src.put("/users/update/:id", UserController.updateUser);

  src.get("/users/select/:id", UserController.searchUserById);

  src.delete("/users/delete/:id", UserController.deleteUserById);
};
