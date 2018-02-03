![NodeJS logo](http://cfile10.uf.tistory.com/image/1973644A5149370931E7E6)

## Rest API Node

Api developed in NodeJS, Express and MongoDB to test application Front End.

### Description

This API is developed to provide Front End developers with a server and database configurations for connection testing and to provide a visualization of the data streamlining for the development process.
The API provides HTTP methods via AJAX requests to collect, insert and update the given data.

### Showcase

| Application | Code (GitHub) |
| ------ | ------ |
|https://typescript-angular4.herokuapp.com/ | https://github.com/renanlopescoder/typescript-angular4 |
|http://mobx-react.herokuapp.com/ | https://github.com/renanlopescoder/mobx-react |


## Routes

| URL | Collection | Method | Parameters | Response | Action |
| ------ | ------ | ------ | ------ | ------ | ------ | 
| https://rest-api-node.herokuapp.com/list/projects | projects | get | Nothing | JSON with Array | Get a list of projects in the database |
| https://rest-api-node.herokuapp.com/create/project | projects | post | JSON | JSON | Add JSON into the database |
| https://rest-api-node.herokuapp.com/update/project/:id | projects | put | id, JSON | Update the document with sent JSON data |
| https://rest-api-node.herokuapp.com/select/project/:id | projects | get | id | JSON | Return the document, related to the sent id |
| https://rest-api-node.herokuapp.com/delete/project/:id | projects | delete | id | status 200 | Delete the document, related to the sent id |
	
## Collections

#### Schema Project (projects)

| Name | Description | Type |
| ------ | ------ | ------ | 
| project | project name | String |
| technologies | project technologies | String |
| description | project description  | String |
| demoLink | demo link | String |
| githubLink | GitHub link | String |
| author | author's name | String |
| authorLink | links to author (website, linkedin) | String |
| project | project name | String |
| status | project status (Development / Production) | String |

## API

| Technology | Description | Link |
| ------ | ------ | ------ |
| Heroku | Cloud Platform | [heroku.com] |
| Heroku mLab Dyno | MongoDB database server | [mlab.com] |
| GitHub | Version Controlling | [github.com] |
| Nodemon | server reload, automatically | [nodemon.com] |

## API Directories

- Routes ```./app/routes```
- Models ```./app/models```
- API ```./app/api```
- Configurations of Express ```./config/express.js```
- Database configurations ```./config/database.js```
- Server configurations ```./server.js```

## Configuring the API locally 

- Download or clone the project access the project folder with the terminal and execute the CLI <code>npm install</code>.
- Run the server <code>npm start</code> (Nodemon)
- Access in your browser <a href="http://localhost:3000">http://localhost:3000</a>

## API Dependencies

- Dependency express - <a href="https://www.npmjs.com/package/express">https://www.npmjs.com/package/express</a>
- Dependency body-parser - <a href="https://www.npmjs.com/package/body-parser">https://www.npmjs.com/package/body-parser</a>
- Dependency cors - <a href="https://www.npmjs.com/package/cors">https://www.npmjs.com/package/cors</a>
- Dependency express-load - <a href="https://www.npmjs.com/package/express-load">https://www.npmjs.com/package/express-load</a>
- Dependency Nodemon - <a href="https://nodemon.io/">https://nodemon.io/</a> 

By: <a href="http://renanlopes.com">Renan Lopes</a>

[heroku.com]: <https://www.heroku.com>
[mlab.com]: <https://mlab.com>
[github.com]: <https://www.github.com>
[nodemon.com]: <https://nodemon.io/>
