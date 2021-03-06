angular.module("myApp", [])

.controller('MyController', ['$scope', '$interpolate', function($scope, $interpolate){
  $scope.$watch('emailBody', function(body){
    if( body ){
      var template = $interpolate(body);
      $scope.previewText = template({to: $scope.to});
    }
  })
}])