var myApp = angular.module('myApp', [
    'ngRoute',
    'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider

    .when('/home', {
        templateUrl: 'partials/home.ejs',
        controller: 'listControllerHome'
    })
    .when('/speakers', {
        templateUrl: 'partials/speakers.ejs',
<<<<<<< HEAD
        controller: 'listControllerSpeakers'
=======
        controller: 'speakersController'
>>>>>>> 3cbb1e09b9c0191c43a05e56764ff67ae69f76c3
    })
    .when('/speakers/:speakerid', {
        templateUrl: 'partials/speakers.ejs',
        controller: 'listControllerDetails'
    })
    .otherwise({
        redirectTo: '/home'
    });
}]);
