function MyController($scope, $timeout){
  var updateClock = function(){
    $timeout(function(){
      $scope.clock = new Date();
      updateClock();
    }, 1000);
  };
  updateClock();
}