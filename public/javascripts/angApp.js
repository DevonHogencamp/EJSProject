var myApp = angular.module('myApp', [
    'ngRoute',
    // 'Controllers'
]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider

    .when('/', {
        templateUrl: 'partials/content/home.ejs',
        // controller: 'listController'
    })
    .when('/speakers', {
        templateUrl: 'partials/speakers.ejs',
    })
    .when('/speakers/:speakerid', {
        templateUrl: 'partials/content/speakerslist.ejs',
        // controller: 'detailsController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
