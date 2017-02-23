// Create a new module
var artistControllers = angular.module('artistControllers', [
    'ngRoute'
]);

<<<<<<< HEAD
artistControllers.controller('listControllerHome', ['$scope', '$http', function listController($scope, $http) {
    $scope.class = 'speakerslist';
=======
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

>>>>>>> 3cbb1e09b9c0191c43a05e56764ff67ae69f76c3
    $http.get('/data.json').then(function(res){
        $scope.artists = res.data.speakers;
        $scope.home= true;

    }, function(result){
        console.log('http request failed with result: ' + res);
    });
}]);

artistControllers.controller('listControllerSpeakers', ['$scope', '$http', function listController($scope, $http) {
    $http.get('/data.json').then(function(res){
        $scope.artists = res.data.speakers;
        $scope.speakers= true;
    }, function(result){
        console.log('http request failed with result: ' + res);
    });
}]);

artistControllers.controller('listControllerDetails', ['$scope', '$http', '$route', '$routeParams', function listController($scope, $http, $route, $routeParams) {
    $http.get('/data.json').then(function(res){
        var param = $routeParams.speakerid;
        var speakers = res.data.speakers;
        var artists = [];
        speakers.forEach(function(item){
            if(item.shortname == param){
                artists.push(item);
            }
        });
        $scope.artists = artists;
        $scope.details= true;
    }, function(result){
        console.log('http request failed with result: ' + res);
    });
}]);
