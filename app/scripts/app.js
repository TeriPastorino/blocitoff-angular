var blocList = angular.module('blocList', ['ui.router', 'firebase']);

/*var Firebase = require("firebase");
//stateProvider - configure state behavior
locationProvider = how app handles URLS in browser
*/
blocList.config(function($stateProvider, $locationProvider){
//disable #! default in path
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
 
  $stateProvider.state('login', {
    url: '/',
    controller: 'LoginController',
    templateUrl: '/templates/login.html'
  });
  
  $stateProvider.state('history', {
    url: '/history',
    controller: 'HistoryController',
    templateUrl: '/templates/history.html'
  });
  
  $stateProvider.state('task', {
    url: '/task',
    controller: 'TaskController',
    templateUrl: '/templates/task.html'
  });
});
