## API Rest NodeJS

API REST built with NodeJS.

- Hackathon MVP Mobile Ionic - <a href="https://github.com/renanlopescoder/hackathon-mvp-mobile-ionic">https://github.com/renanlopescoder/hackathon-mvp-mobile-ionic</a> 

## Resources

- Back End -> NodeJS / Express
- Database -> mLab MongoDB (NoSQL Database)
- Cloud Server -> Heroku
- Server Reload -> Nodemon reload, automatically

## Folders

- Routes ```./app/routes```
- Models ```./app/models```
- API ```./app/api```
- Config Express ```./config/express.js```
- Config Database ```./config/database.js```
- Server ```./server.js```

## Project Environment Installation

### NodeJS

- Download and install NodeJS <a href="https://nodejs.org/en/" target="_blank">nodejs.org</a>.

### MongoDB 

- Install with Homebrew <code>/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</code>.
- Update Homebew <code>brew update</code> 
- Install MongoDB <code>brew install mongodb</code>.
- Em alguns casos precisamos usar o comando como sudo para criação da pasta db no terminal <code>sudo mkdir -p /data/db</code> e mudar a permissão de acesso usando linha de comando <code>sudo chmod 777 /data/db</code>.
- Então para iniciar o MongoDB basta usar o comando <code>mongod</code>.

## Project

- Download or clone the project access the project folder with the terminal and execute the CLI <code>npm install</code>.
- Run the server <code>npm start</code> (Nodemon)
- Access in your browser <a href="http://localhost:3000">http://localhost:3000</a>

#### Sample with Ionic 1.x (AngularJS 1.x) using a service

<code>
angular.module('starter')
  .service('services', function($http, $ionicPopup, $rootScope, $state){

    var url = 'https://hackathon-mvp.herokuapp.com';

    return {
      
  /* =============== ===== ===================*/
  /* =============== LOGIN ===================*/
  /* =============== ===== ===================*/

      realizarLogin : function(dadosUsuario){
        
        $http.post(
          url + '/login', 
          {
            email: dadosUsuario.email,
            password: dadosUsuario.password
          }
        )
        .then(
          function (response) {
            $rootScope.usuario = response.data;
            $state.go('app.lista');
          }, 
          function (error) {
            console.log(error);
            $ionicPopup.alert({
              title : 'Atenção!',
              template : 'Email ou senha incorretos!'
            });
          }
        );
      },

  /* =============== ===== ===================*/
  /* =============== LISTA ===================*/
  /* =============== ===== ===================*/

      obterLista : function(){
        return $http.get(url + '/list/mvpData').then(function(response){
          return response.data;
        });
      }, 

  /* =============== =============== ===================*/
  /* =============== ATUALIZAR DADOS ===================*/
  /* =============== =============== ===================*/

      atualizarDados : function(dados){
        return $http.post(url + "/update/mvpData/"+ dados._id , dados).then(
          function(response){
            $state.go('app.lista');
          });
      },

  /* =============== ====================== ===================*/
  /* =============== ATUALIZAR DADOS PERFIL ===================*/
  /* =============== ====================== ===================*/

      atualizarDadosPerfil : function(dados){
        return $http.post(url + "/update/user/"+ dados.user_id , dados).then(
          function(response){
            
          });
      },

  /* =============== ================ ===================*/
  /* =============== SALVAR NOVO DADO ===================*/
  /* =============== ================ ===================*/

      salvarDados : function(dados){
        return $http.post(url + "/create/mvpData", dados).then(
          function(response){
            $state.go('app.lista');
          });
      },

  /* =============== ============= ===================*/
  /* =============== DELETAR DADOS ===================*/
  /* =============== ============= ===================*/

      deletarDados : function(dados){
        return $http.delete(url + "/delete/mvpData/" + dados._id).then(
          function(response){
            $state.go($state.current, {}, {reload: true});
          });
      },
    }
  });
</code>

## Dependencies

- Dependency express - <a href="https://www.npmjs.com/package/express">https://www.npmjs.com/package/express</a>
- Dependency body-parser - <a href="https://www.npmjs.com/package/body-parser">https://www.npmjs.com/package/body-parser</a>
- Dependency cors - <a href="https://www.npmjs.com/package/cors">https://www.npmjs.com/package/cors</a>
- Dependency express-load - <a href="https://www.npmjs.com/package/express-load">https://www.npmjs.com/package/express-load</a>
- Dependency Nodemon - <a href="https://nodemon.io/">https://nodemon.io/</a> 

By: <a href="http://renanlopes.com">Renan Lopes</a>

