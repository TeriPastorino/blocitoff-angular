angular.module('blocList').controller('TasksController', function($scope, $firebaseArray, $window) {
  var tasksRef = new $window.Firebase("https://crackling-inferno-1969.firebaseio.com/tasks");
  $scope.tasks = $firebaseArray(tasksRef);
//  $scope.tasks.$add({ description: 'a description', priority: 'a priority', status: 'a status' });
});