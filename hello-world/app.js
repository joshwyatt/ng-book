function MyController($scope, $timeout){
  $scope.clock = {};
  var updateClock = function(){
    $timeout(function(){
      $scope.clock.now = new Date();
      updateClock();
    }, 1000);
  };
  updateClock();
}