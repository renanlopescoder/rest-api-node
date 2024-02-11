![NodeJS logo](logo.png)

## Node API

### Description

Node API is production ready and open source project in Node, Express and MongoDB

### Documentation

Swagger Docs https://rest-api-node-413916.uc.r.appspot.com/docs/

### Support

This application is hosted on Google Cloud Platfom and serve a bunch of AJAX requests to give and manipulate data from database and give a support to test front end applications

### Servers

| Server     | Description                           | Api Url                                       |
| ---------- | ------------------------------------- | --------------------------------------------- |
| App Engine | Rest API Node - Google Cloud Platform | https://rest-api-node-413916.uc.r.appspot.com |

### Showcase

| Application                                | Code (GitHub)                                          | Server  |
| ------------------------------------------ | ------------------------------------------------------ | ------- |
| https://typescript-angular4.herokuapp.com/ | https://github.com/renanlopescoder/typescript-angular4 | staging |
| http://mobx-react.herokuapp.com/           | https://github.com/renanlopescoder/mobx-react          | staging |
| http://vue-clash.herokuapp.com/            | https://github.com/renanlopescoder/vue                 | staging |

## Routes

#### Projects

| URL                                                               | Collection | Method | Parameters | Response                                | Action                                      |
| ----------------------------------------------------------------- | ---------- | ------ | ---------- | --------------------------------------- | ------------------------------------------- |
| https://rest-api-node-413916.uc.r.appspot.com/projects            | projects   | get    | Nothing    | JSON with Array                         | Get a list of projects in the database      |
| https://rest-api-node-413916.uc.r.appspot.com/projects/create     | projects   | post   | JSON       | JSON                                    | Add JSON into the database                  |
| https://rest-api-node-413916.uc.r.appspot.com/projects/update/:id | projects   | put    | id, JSON   | Update the document with sent JSON data |
| https://rest-api-node-413916.uc.r.appspot.com/projects/select/:id | projects   | get    | id         | JSON                                    | Return the document, related to the sent id |
| https://rest-api-node-413916.uc.r.appspot.com/projects/delete/:id | projects   | delete | id         | status 200                              | Delete the document, related to the sent id |

#### Users

| URL                                                            | Collection | Method | Parameters | Response        | Action                                      |
| -------------------------------------------------------------- | ---------- | ------ | ---------- | --------------- | ------------------------------------------- |
| https://rest-api-node-413916.uc.r.appspot.com/users            | users      | get    | Nothing    | JSON with Array | Get a list of users in the database         |
| https://rest-api-node-413916.uc.r.appspot.com/users/create     | users      | post   | JSON       | JSON            | Add JSON into the database                  |
| https://rest-api-node-413916.uc.r.appspot.com/users/update/:id | users      | put    | id         | JSON            | Update the document with sent JSON data     |
| https://rest-api-node-413916.uc.r.appspot.com/users/select/:id | users      | get    | id         | JSON            | Return the document, related to the sent id |
| https://rest-api-node-413916.uc.r.appspot.com/users/delete/:id | users      | delete | id         | status 200      | Delete the document, related to the sent id |

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

| Technology    | Description             | Link               |
| ------------- | ----------------------- | ------------------ |
| AppEngine     | Google Cloud Platform   | [cloud.google.com] |
| MongoDB Atlas | MongoDB database server | [mongodb.com]      |
| GitHub        | Version Controlling     | [github.com]       |

## API Directories

- Public Routes `./src/routes/public`
- Private Routes `./src/routes/private`
- Models `./src/app/Models`
- Controllers `./src/app/Controllers`
- Services `./src/app/Services`
- Config consign and express `./src/config/express.js`
- Server configuration and application startup `./server.js`

## Configuring the API locally

- Download or clone the project access the project folder with the terminal and execute the CLI <code>npm install</code>
- Create your .env file with the following configuration
  - WORKERS: How many workers you need
  - AUTO_SCALE: When enabled will create workers by CPU Eg.: CPU \* WORKERS
  - DATABASE_URL: Your database URL
  - AUTH_ROUNDS and AUTH_SECRET: Those are used for authentication and verification

```
WORKERS=1
AUTO_SCALE=true
DATABASE_URL=mongodb+srv://<user>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
AUTH_ROUNDS=15
AUTH_SECRET=docssecret
```

- Run the server <code>npm start</code>
- Access in your browser <a href="http://localhost:8080/projects">http://localhost:8080/projects</a>
- For deployment is important to update app.yaml to your service_account and can be found on your GCP

## API Dependencies

- Dependency express - <a href="https://www.npmjs.com/package/express">https://www.npmjs.com/package/express</a>
- Dependency body-parser - <a href="https://www.npmjs.com/package/body-parser">https://www.npmjs.com/package/body-parser</a>
- Dependency cors - <a href="https://www.npmjs.com/package/cors">https://www.npmjs.com/package/cors</a>
- Dependency consign - <a href="https://www.npmjs.com/package/consign">https://www.npmjs.com/package/consign</a>
- Dependency mongoose - <a href="https://www.npmjs.com/package/mongoose">https://www.npmjs.com/package/mongoose</a>

By: <a href="http://renanlopes.com">Renan Lopes</a>

[vercel.com]: https://www.vercel.com
[mongodb.com]: https://www.mongodb.com/atlas/database
[github.com]: https://www.github.com
