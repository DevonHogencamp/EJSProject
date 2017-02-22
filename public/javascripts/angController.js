// Create a new module
var artistControllers = angular.module('artistControllers', [
    'ngRoute'
]);

artistControllers.controller('listController', ['$scope', '$http', function listController($scope, $http, $routeParams) {
    $scope.params = $routeParams;

    $http.get('/data.json').then(function(res){
        $scope.artists = res.data.speakers;
        $scope.artistOrder = "name";
    }, function(result){
        console.log('http request failed with result: ' + result);
    });
}]);
