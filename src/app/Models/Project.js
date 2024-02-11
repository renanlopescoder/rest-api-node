/**
 * @swagger
 *  components:
 *    schemas:
 *      Project:
 *        type: object
 *        properties:
 *          project:
 *            type: string
 *            description: Name of the project
 *          technologies:
 *            type: string
 *            description: Technologies used in the project
 *          description:
 *            type: string
 *            description: Detailed description of the project
 *          demoLink:
 *            type: string
 *            description: URL to the live demo of the project
 *          githubLink:
 *            type: string
 *            description: URL to the GitHub repository of the project
 *          author:
 *            type: string
 *            description: Name of the project's author
 *          authorLink:
 *            type: string
 *            description: URL to the author's profile or homepage
 *          status:
 *            type: string
 *            description: Current status of the project (e.g., active, completed, on hold)
 *        example:
 *           project: My Awesome Project
 *           technologies: JavaScript, React, Node.js
 *           description: This project is a web application that allows users to...
 *           demoLink: https://demolink.com
 *           githubLink: https://githublink.com
 *           author: Renan
 *           authorLink: https://authorprofile.com
 *           status: Active
 */
const mongoose = require("mongoose");

const schema = mongoose.Schema({
  project: {
    type: String,
    required: false,
  },
  technologies: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  demoLink: {
    type: String,
    required: false,
  },
  githubLink: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: false,
  },
  authorLink: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
});

mongoose.model("Project", schema);
