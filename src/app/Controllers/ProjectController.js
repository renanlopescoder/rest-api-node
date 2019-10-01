"use strict";

const mongoose = require("mongoose");
const model = mongoose.model("Project");

class ProjectController {
  async getAllProjects(req, res) {
    try {
      const projects = await model.find({});
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async createProject(req, res) {
    try {
      const user = await model.create(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateProject(req, res) {
    const { params, body } = req;
    try {
      const project = await model.findByIdAndUpdate(params.id, body);
      res.status(200).json(project);
    } catch (error) {
      res.status(404).json(error);
    }
  }

  async searchProjectById(req, res) {
    try {
      const project = await model.findById(req.params.id);
      res.status(200).json(project);
    } catch (error) {
      res.status(404).json(error);
    }
  }

  async deleteProjectById(req, res) {
    try {
      await model.remove({ _id: req.params.id });
      res.status(200);
    } catch (error) {
      res.status(404).json(error);
    }
  }
}

module.exports = new ProjectController();
