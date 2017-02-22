var myApp = angular.module('myApp', [
    'ngRoute',
    'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider

    .when('/home', {
        templateUrl: 'partials/home.ejs',
        controller: 'listController'
    })
    .when('/speakers', {
        templateUrl: 'partials/speakers.ejs',
        controller: 'listController'
    })
    .when('/speakers/:speakerid', {
        templateUrl: 'partials/content/speakerslist.ejs',
        controller: 'listController'
    })
    .otherwise({
        redirectTo: '/home'
    });
}]);
