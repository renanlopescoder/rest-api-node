/**
 * @swagger
 * paths:
 *   /projects:
 *     get:
 *       summary: Retrieves a list of projects
 *       description: Fetches a list of all projects from the database.
 *       responses:
 *         200:
 *           description: A list of projects.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Project'
 *   /projects/select/{id}:
 *     get:
 *       summary: Searches for a project by ID
 *       description: Returns a single project matching the provided ID.
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Unique ID of the project to retrieve.
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: A project object.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Project'
 *         404:
 *           description: Project not found.
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       properties:
 *         project:
 *           type: string
 *           description: Name of the project.
 *         technologies:
 *           type: string
 *           description: Technologies used in the project.
 *         description:
 *           type: string
 *           description: Detailed description of the project.
 *         demoLink:
 *           type: string
 *           description: URL to the live demo of the project.
 *         githubLink:
 *           type: string
 *           description: URL to the GitHub repository of the project.
 *         author:
 *           type: string
 *           description: Name of the project's author.
 *         authorLink:
 *           type: string
 *           description: URL to the author's profile or homepage.
 *         status:
 *           type: string
 *           description: Current status of the project (e.g., active, completed, on hold).
 *       example:
 *         project: My Awesome Project
 *         technologies: JavaScript, React, Node.js
 *         description: This project is a web application that allows users to...
 *         demoLink: https://demolink.com
 *         githubLink: https://githublink.com
 *         author: Renan
 *         authorLink: https://authorprofile.com
 *         status: Active
 */

module.exports = (src) => {
  const { ProjectController } = src.app.Controllers;

  src.get("/projects", ProjectController.getAllProjects);
  src.get("/projects/select/:id", ProjectController.searchProjectById);
};
