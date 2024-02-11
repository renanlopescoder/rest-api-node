/**
 * @swagger
 * components:
 *   securitySchemes:
 *     authorization:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Project:
 *       type: object
 *       properties:
 *         project:
 *           type: string
 *           description: Name of the project
 *         technologies:
 *           type: string
 *           description: Technologies used in the project
 *         description:
 *           type: string
 *           description: Detailed description of the project
 *         demoLink:
 *           type: string
 *           description: URL to the live demo of the project
 *         githubLink:
 *           type: string
 *           description: URL to the GitHub repository of the project
 *         author:
 *           type: string
 *           description: Name of the project's author
 *         authorLink:
 *           type: string
 *           description: URL to the author's profile or homepage
 *         status:
 *           type: string
 *           description: Current status of the project (e.g., active, completed, on hold)
 *       example:
 *         project: My Awesome Project
 *         technologies: JavaScript, React, Node.js
 *         description: This project is a web application that allows users to...
 *         demoLink: https://demolink.com
 *         githubLink: https://githublink.com
 *         author: Renan
 *         authorLink: https://authorprofile.com
 *         status: Active
 *
 * paths:
 *   /projects/create:
 *     post:
 *       summary: Create a project
 *       description: Creates a new project entry.
 *       security:
 *         - authorization: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       responses:
 *         200:
 *           description: Project created successfully.
 *         401:
 *           description: Unauthorized if the user is not authenticated.
 *
 *   /projects/update/{id}:
 *     put:
 *       summary: Update a project
 *       description: Updates an existing project by its ID.
 *       security:
 *         - authorization: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Unique ID of the project to update.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       responses:
 *         200:
 *           description: Project updated successfully.
 *         400:
 *           description: Bad request if the input data is invalid.
 *         401:
 *           description: Unauthorized if the user is not authenticated.
 *
 *   /projects/delete/{id}:
 *     delete:
 *       summary: Delete a project
 *       description: Deletes an existing project by its ID.
 *       security:
 *         - authorization: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Unique ID of the project to delete.
 *       responses:
 *         200:
 *           description: Project deleted successfully.
 *         401:
 *           description: Unauthorized if the user is not authenticated.
 *
 * security:
 *   - authorization: []
 */

module.exports = (src) => {
  const { ProjectController } = src.app.Controllers;

  src.post("/projects/create", ProjectController.createProject);
  src.put("/projects/update/:id", ProjectController.updateProject);
  src.delete("/projects/delete/:id", ProjectController.deleteProjectById);
};
