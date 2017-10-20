![NodeJS logo](http://cfile10.uf.tistory.com/image/1973644A5149370931E7E6)

## Api Rest Node

Api developed in NodeJS, Express and MongoDB for testing Front End applications.

### Description

Reason for the development of the API is to provide the Front End developers with a server and database configured for connection testing and visualization of the data streamlining the development process the API provides via AJAX requests http methods to collect, insert and change data.

### Showcase

| Application | Code (GitHub) |
| ------ | ------ |
| https: //typescript-angular4.herokuapp.com/ | https://github.com/renanlopescoder/typescript-angular4 |

## Routes

| url | collection | method | parameters | return | action |
| ------ | ------ | ------ | ------ | ------ | ------ |
| https://rest-api-node.herokuapp.com/list/projects | projects | get | Do not Own | JSON with Array | Get list of projects in the bank |
| https://rest-api-node.herokuapp.com/create/project | projects | post | JSON | JSON | adds JSON to bank |
| https://rest-api-node.herokuapp.com/update/project/:id | projects | put | id, JSON | to update document with JSON data sent |
| https://rest-api-node.herokuapp.com/select/project/:id | projects | get | id | JSON | returns document with sent id |
| https://rest-api-node.herokuapp.com/delete/project/:id | projects | delete | id | status 200 | Delete the document with sent ID |

## Collections

#### Schema Project (projects)

| name | description | type |
| ------ | ------ | ------ |
| project | project name | String |
| technologies | design technologies | String |
| description | project description | String |
| demoLink | demo link | String |
| githubLink | link GitHub | String |
| author | Name of author | String |
| authorLink | author link (website, linkedin) | String |
| project | project name | String |
| status | project status (Development / Production) | String |

## API

| Contact Us | Description | Link |
| ------ | ------ | ------ |
| Heroku | Cloud Platform | [heroku.com] |
| Heroku mLab Dyno | MongoDB Database Server | [mlab.com] |
| GitHub | Versioning | [github.com] |
| Nodemon | server reload, automatically | [nodemon.com] |

## API Directories

- Routes `` `/ app / routes```
- Models `` `/ app / models```
- Api `` `/ app / api```
- Configuration of Express `` `. / Config / express.js```
- Configuration Database `` `. / Config / database.js```
- Server `` `./server.js```

## Configuring the API Locally

- Download or clone the project to access the project folder with the terminal and execute the CLI <code> npm install </ code>.
- Run the server <code> npm start </ code> (Nodemon)
- Access in your browser <a href="http://localhost:3000"> http: // localhost: 3000 </a>

## API Dependencies

- Dependency express - <a href="https://www.npmjs.com/package/express"> https://www.npmjs.com/package/express </a>
- Dependency body-parser - <a href="https://www.npmjs.com/package/body-parser"> https://www.npmjs.com/package/body-parser </a>
- Dependency cors - <a href="https://www.npmjs.com/package/cors"> https://www.npmjs.com/package/cors </a>
- Dependency express-load - <a href="https://www.npmjs.com/package/express-load"> https://www.npmjs.com/package/express-load </a>
- Dependency Nodemon - <a href="https://nodemon.io/"> https://nodemon.io/ </a>

By: <a href="http://renanlopes.com"> Renan Lopes </a>

[heroku.com]: <https://www.heroku.com>
[mlab.com]: <https://mlab.com>
[github.com]: <https://www.github.com>
[nodemon.com]: <https://nodemon.io/>
