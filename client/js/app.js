/**
 * Created by GODFATHER on 09-08-16.
 */
var app = angular.module('myApp', ['ngRoute', 'ngResource']);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/login', {
        templateUrl: '/views/login.html',
        controller: 'logInController'
    }).when('/registration', {
        templateUrl: '/views/registration.html',
        controller: 'registrationController'
    }).when('/', {
        templateUrl: '/views/login.html',
        controller: 'logInController'
    }).when('/home', {
        templateUrl: '/views/home.html',
        controller: 'homeController'
    }).otherwise({
        redirectTo: '/login'
    });
    $locationProvider.html5Mode(true);
}]);
