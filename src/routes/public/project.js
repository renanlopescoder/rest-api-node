module.exports = (src) => {
  const { ProjectController } = src.app.Controllers;

  src.get("/projects", ProjectController.getAllProjects);
  src.get("/projects/select/:id", ProjectController.searchProjectById);
};
