angular.module('myApp', [])

.controller('MyController', function($scope){
  $scope.data = {};
  $scope.data.name = "josh";
})

.controller('AddingController', function($scope){
  $scope.calc = {
    counter: 0,
    add: function(amount){
      this.counter += amount;
    },
    substract: function(amount){
      this.counter -= amount;
    }
  };
})