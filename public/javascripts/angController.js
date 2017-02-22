// Create a new module
var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('listController', ['$scope', '$http', function listController($scope, $http) {
    $http.get('/data.json').then(function(res){
        $scope.artists = res.data;
        $scope.artistOrder = "name";
    }, function(result){
        console.log('http request failed with result: ' + result);
    });
}]);
