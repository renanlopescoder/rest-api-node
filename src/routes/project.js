module.exports = (src) => {
  const { ProjectController } = src.app.Controllers;
  src.get("/projects", ProjectController.getAllProjects);
  src.post("/projects/create", ProjectController.createProject);
  src.put("/projects/update/:id", ProjectController.updateProject);
  src.get("/projects/select/:id", ProjectController.searchProjectById);
  src.delete("/projects/delete/:id", ProjectController.deleteProjectById);
};
