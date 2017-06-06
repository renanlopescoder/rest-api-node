var directives = angular.module('directives', []);

directives.directive('navbar', function(){
  var ddo = {};

  ddo.restrict =  "E";

  ddo.templateUrl = 'js/directives/navbar.html';

  return ddo;
});