api.controller('UserController', function($scope, $http, auth) {
  $scope.user = {};
  $scope.newUser = {};

  $scope.login = function(){
    var user = $scope.user;
    console.log(user);
    //Usando Promisse
      $http.post('/login', {email: user.email, password: user.password})
      .then(function(response){
        if(response.status == 200){
          window.localStorage.setItem('user', JSON.stringify(response.data));
          alert('Logado com Sucesso ' + user.username);
          var token = auth.getUser();
          window.location = '/#/list';
        };
        if(response.status == 401){
          window.location = '/#/';
        }

      }, function (error){
        console.log(error);
        alert('Usuario ou senha invalidos');
         $scope.user = {};
      });
  };

  $scope.createUser = function(){
    var newUser = $scope.newUser;
    $http.post('/createUser', newUser)
      .then(function(response){
        alert('Usuario criado com sucesso '+newUser.username);
        $scope.newUser = {};
        location.reload();
      }, function (error){
        console.log(error);
        alert('Erro de criação de usuário');
         $scope.newUser = {};
      });
  };

});
