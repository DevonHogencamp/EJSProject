// Create a new module
var artistControllers = angular.module('artistControllers', [
    'ngRoute'
]);

artistControllers.controller('listController', ['$scope', '$http', function listController($scope, $http) {
    $scope.home = true;

    $scope.class = 'speakerslist';

    $http.get('/data.json').then(function(res){
        $scope.artists = res.data.speakers;
        $scope.artistOrder = "name";
    }, function(result){
        console.log('http request failed with result: ' + result);
    });
}]);

artistControllers.controller('speakersController', ['$scope', '$http', function listController($scope, $http) {
    $scope.speakers = true;

    $http.get('/data.json').then(function(res){
        $scope.artists = res.data.speakers;
        $scope.artistOrder = "name";
    }, function(result){
        console.log('http request failed with result: ' + result);
    });
}]);
