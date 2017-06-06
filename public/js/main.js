var api = angular.module('api',['ngRoute','services','directives']);

api.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {

  $routeProvider.when('/', {
       templateUrl : 'views/register.html',
       controller : 'UserController'
    })
   .otherwise ({ redirectTo: '/' });
}]);
