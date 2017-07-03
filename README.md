![NodeJS logo](http://cfile10.uf.tistory.com/image/1973644A5149370931E7E6)

## Api Rest Node

Api desenvolvida em NodeJS, Express e MongoDB para teste de aplicações Front End.

### Descrição

Motivo do desenvolvimento da API é disponibilizar a desenvolvedores Front End um servidor e banco de dados configurado para testes de conexão e de visualização dos dados agilizando o processo de desenvolvimento a API fornece via requisições AJAX métodos http para coletar, inserir e alterar dados.

## Rotas

| url | collection | método | parâmetros | retorno | ação |
| ------ | ------ | ------ | ------ | ------ | ------ | 
| https://rest-api-node.herokuapp.com/list/projects | projects | get | Não Possui | JSON com Array | Pega lista de projetos no banco |
| https://rest-api-node.herokuapp.com/create/project | projects | post | JSON | JSON | adiciona JSON ao banco |
| https://rest-api-node.herokuapp.com/update/project/:id | projects | put | id, JSON | atualiza o documento com dados do JSON enviado |
| https://rest-api-node.herokuapp.com/select/project/:id | projects | get | id | JSON | retorna o documento com id enviado |
| https://rest-api-node.herokuapp.com/delete/project/:id | projects | delete | id | status 200 | Apaga o documento com id enviado |
	
## Collections

#### Schema Project (projects)

| nome | descrição | type |
| ------ | ------ | ------ | 
| project | nome do projeto | String |
| technologies | tecnologias do projeto | String |
| description | descrição do projeto | String |
| demoLink | link de demonstração | String |
| githubLink | link GitHub | String |
| author | nome do autor | String |
| authorLink | link do autor (website, linkedin) | String |
| project | nome do projeto | String |
| status | status do projeto (Desenvolvimento / Produção) | String |

## API

| Tecnologia | Descrição | Link |
| ------ | ------ | ------ |
| Heroku | Cloud Platform | [heroku.com] |
| Heroku mLab Dyno | Servidor do Banco de Dados MongoDB | [mlab.com] |
| GitHub | Versionamento | [github.com] |
| Nodemon | server reload, automatically | [nodemon.com] |

## Diretórios da API

- Rotas ```./app/routes```
- Modelos ```./app/models```
- Api ```./app/api```
- Configuração do Express ```./config/express.js```
- Configuração Database ```./config/database.js```
- Servidor ```./server.js```

## Configurando a API localmente

- Download or clone the project access the project folder with the terminal and execute the CLI <code>npm install</code>.
- Run the server <code>npm start</code> (Nodemon)
- Access in your browser <a href="http://localhost:3000">http://localhost:3000</a>

## Dependencias da API

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