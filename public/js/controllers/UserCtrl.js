angular.module('UserCtrl', []).controller('UserController', function($scope,$http) {

	$scope.tagline = 'User listing';
       
         $scope.master = {};

            $scope.update = function(user) {
              $scope.master = angular.copy(user);
               
           $http.post('http://localhost:8080/users/add', JSON.stringify(user)).success(function(){
                   alert('success')
               });

            };

            $scope.reset = function() {
              $scope.user = angular.copy($scope.master);
            };

      $scope.reset();
});


