"use strict";

const mongoose = require("mongoose");
const model = mongoose.model("Project");

class ProjectController {
  getAllProjects = async (req, res) => {
    try {
      const projects = await model.find({});
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  createProject = async (req, res) => {
    try {
      const user = await model.create(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  updateProject = async (req, res) => {
    const { params, body } = req;
    try {
      const project = await model.findByIdAndUpdate(params.id, body);
      res.status(200).json(project);
    } catch (error) {
      res.status(404).json(error);
    }
  };

  searchProjectById = async (req, res) => {
    try {
      const project = await model.findById(req.params.id);
      res.status(200).json(project);
    } catch (error) {
      res.status(404).json(error);
    }
  };

  deleteProjectById = async (req, res) => {
    try {
      await model.remove({ _id: req.params.id });
      res.status(200);
    } catch (error) {
      res.status(404).json(error);
    }
  };
}

module.exports = new ProjectController();
