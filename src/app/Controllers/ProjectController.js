const mongoose = require("mongoose");
const model = mongoose.model("Project");

class ProjectController {
  async getAllProjects(request, response) {
    try {
      const projects = await model.find({});
      return response.status(200).json(projects);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async createProject(request, response) {
    try {
      const user = await model.create(request.body);
      return response.json(user);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async updateProject(request, response) {
    const { params, body } = request;
    try {
      const project = await model.findByIdAndUpdate(params.id, body);
      return response.status(200).json(project);
    } catch (error) {
      return response.status(404).json(error);
    }
  }

  async searchProjectById(request, response) {
    try {
      const project = await model.findById(request.params.id);
      return response.status(200).json(project);
    } catch (error) {
      return response.status(404).json(error);
    }
  }

  async deleteProjectById(request, response) {
    try {
      await model.deleteOne({ _id: request.params.id });

      return response.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}

module.exports = new ProjectController();
