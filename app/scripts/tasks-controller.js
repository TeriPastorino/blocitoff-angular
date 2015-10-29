angular.module('blocList').controller('TasksController', function ($scope, $firebaseArray, $window) {

  
  var isTaskExpired = function (task) {
  var timeNow = new Date().getTime();
  return ((timeNow - task.timeCreated) >= 604800000);
};

  var tasksRef = new $window.Firebase("https://crackling-inferno-1969.firebaseio.com/tasks");
  $scope.tasks = $firebaseArray(tasksRef);

  //set empty to start
  $scope.taskName = "";
  
  //create new task
  //break it apart or do it all in one?
  //how?
  $scope.addTask = function () {
  
    $scope.tasks.$add({
      name: $scope.taskName,
      //priority: $scope.priority,
      completed: false,
      timeCreated: (new Date()).getTime()
    }).then(function(ref) {
      $scope.taskName = "";
    });

    

  };

/*$scope.removeTask = function () {
  
  $scope.tasks.$remove ();
    
  }

};
*/
  // JavaScript
  /*app.controller("MyCtrl", ["$scope", "$firebaseArray",
    function($scope, $firebaseArray) {
      var list = $firebaseArray(new Firebase(URL));

      // add an item
      list.$add({ foo: "bar" }).then(...);

      // remove an item
      list.$remove(2).then(...);

      // make the list available in the DOM
      $scope.list = list;
    }
  ]);
  */
});