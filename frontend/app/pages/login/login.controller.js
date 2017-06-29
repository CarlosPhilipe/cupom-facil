var myApp = angular.module('cupomFacil',[]);

myApp.controller('loginCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';

  $scope.validaadmin = function (email, password){
        $http({
            url : "/login",
            method : 'post',
            data:{
                'email': email,
                'password': password
            }
        }).success(function(data){
        	console.log(data);
        }).error(function(error){
            $scope.message = "Aconteceu um problema: " + error;
        });
    };

}]);