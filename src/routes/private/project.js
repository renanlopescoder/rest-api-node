module.exports = (src) => {
  const { ProjectController } = src.app.Controllers;

  src.post("/projects/create", ProjectController.createProject);
  src.put("/projects/update/:id", ProjectController.updateProject);
  src.delete("/projects/delete/:id", ProjectController.deleteProjectById);
};
