angular.module("myApp", [])

.controller('MyController', ['$scope', '$filter', function($scope, $filter){
  $scope.text = 'thor';
  $scope.name = $filter('uppercase')('Joshua');
  $scope.today = new Date();
}])