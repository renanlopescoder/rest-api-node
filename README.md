![NodeJS logo](logo.png)

## Node API

### Description

Node API is production ready and open source project in Node, Express and MongoDB

### Support

This application is hosted on Heroku and serve a bunch of AJAX requests to give and manipulate data from database and give a support to test front end applications

### Servers

| Server     | Description       | Api Url                                        | Branch (GitHub) |
| ---------- | ----------------- | ---------------------------------------------- | --------------- |
| staging    | Open Api          | https://rest-api-node.herokuapp.com            | master          |
| production | Authenticated Api | https://rest-api-node-production.herokuapp.com | production      |

### Showcase

| Application                                | Code (GitHub)                                          | Server  |
| ------------------------------------------ | ------------------------------------------------------ | ------- |
| https://typescript-angular4.herokuapp.com/ | https://github.com/renanlopescoder/typescript-angular4 | staging |
| http://mobx-react.herokuapp.com/           | https://github.com/renanlopescoder/mobx-react          | staging |
| http://vue-clash.herokuapp.com/            | https://github.com/renanlopescoder/vue                 | staging |

## Routes

#### Projects

| URL                                                     | Collection | Method | Parameters | Response                                | Action                                      |
| ------------------------------------------------------- | ---------- | ------ | ---------- | --------------------------------------- | ------------------------------------------- |
| https://rest-api-node.herokuapp.com/projects            | projects   | get    | Nothing    | JSON with Array                         | Get a list of projects in the database      |
| https://rest-api-node.herokuapp.com/projects/create     | projects   | post   | JSON       | JSON                                    | Add JSON into the database                  |
| https://rest-api-node.herokuapp.com/projects/update/:id | projects   | put    | id, JSON   | Update the document with sent JSON data |
| https://rest-api-node.herokuapp.com/projects/select/:id | projects   | get    | id         | JSON                                    | Return the document, related to the sent id |
| https://rest-api-node.herokuapp.com/projects/delete/:id | projects   | delete | id         | status 200                              | Delete the document, related to the sent id |

#### Users

| URL                                                  | Collection | Method | Parameters | Response        | Action                                      |
| ---------------------------------------------------- | ---------- | ------ | ---------- | --------------- | ------------------------------------------- |
| https://rest-api-node.herokuapp.com/users            | users      | get    | Nothing    | JSON with Array | Get a list of users in the database         |
| https://rest-api-node.herokuapp.com/users/create     | users      | post   | JSON       | JSON            | Add JSON into the database                  |
| https://rest-api-node.herokuapp.com/users/update/:id | users      | put    | id         | JSON            | Update the document with sent JSON data     |
| https://rest-api-node.herokuapp.com/users/select/:id | users      | get    | id         | JSON            | Return the document, related to the sent id |
| https://rest-api-node.herokuapp.com/users/delete/:id | users      | delete | id         | status 200      | Delete the document, related to the sent id |

## Collections

#### Schema Project (projects)

| Name         | Description                               | Type   |
| ------------ | ----------------------------------------- | ------ |
| project      | project name                              | String |
| technologies | project technologies                      | String |
| description  | project description                       | String |
| demoLink     | demo link                                 | String |
| githubLink   | GitHub link                               | String |
| author       | author's name                             | String |
| authorLink   | links to author (website, linkedin)       | String |
| project      | project name                              | String |
| status       | project status (Development / Production) | String |

#### Schema User (users)

| Name     | Description          | Type   |
| -------- | -------------------- | ------ |
| username | user name            | String |
| password | user password (hash) | String |
| email    | user mail            | String |
| photo    | user photo           | String |
| nickname | user nickname        | String |

## API

| Technology       | Description             | Link         |
| ---------------- | ----------------------- | ------------ |
| Heroku           | Cloud Platform          | [heroku.com] |
| Heroku mLab Dyno | MongoDB database server | [mlab.com]   |
| GitHub           | Version Controlling     | [github.com] |

## API Directories

- Routes `./src/routes`
- Models `./src/app/Models`
- Controllers `./src/app/Controllers`
- Services `./src/app/Services`
- Config consign and express `./src/config/express.js`
- Server configuration and application startup `./server.js`

## Configuring the API locally

- Download or clone the project access the project folder with the terminal and execute the CLI <code>npm install</code>
- To change database change on constants the databaseUrl
- Run the server <code>npm start</code>
- Access in your browser <a href="http://localhost:3000/projects">http://localhost:3000/projects</a>

## API Dependencies

- Dependency express - <a href="https://www.npmjs.com/package/express">https://www.npmjs.com/package/express</a>
- Dependency body-parser - <a href="https://www.npmjs.com/package/body-parser">https://www.npmjs.com/package/body-parser</a>
- Dependency cors - <a href="https://www.npmjs.com/package/cors">https://www.npmjs.com/package/cors</a>
- Dependency consign - <a href="https://www.npmjs.com/package/consign">https://www.npmjs.com/package/consign</a>
- Dependency mongoose - <a href="https://www.npmjs.com/package/mongoose">https://www.npmjs.com/package/mongoose</a>

By: <a href="http://renanlopes.com">Renan Lopes</a>

[heroku.com]: https://www.heroku.com
[mlab.com]: https://mlab.com
[github.com]: https://www.github.com
