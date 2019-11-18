/*global angular*/

var labWebsite = angular.module('labWebsite', ['ngRoute','ngSanitize']);

labWebsite.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/people', {
            templateUrl: 'views/people.html'
        })
        .when('/publications', {
            templateUrl: 'views/publications.html'
        }).otherwise({
            redirectTo: '/home'
        });

}]);

labWebsite.controller('PublicationList', ['$scope', '$http', function($scope, $http){

    $http.get('/publications.json').then(
      function (response) {
          $scope.publications = response.data;

      }
    );

}]);
