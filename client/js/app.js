/**
 * Created by GODFATHER on 09-08-16.
 */
var app = angular.module('myApp', ['ngRoute', 'ngResource']);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/login', {
        templateUrl: '/views/login.html',
        controller: 'logInController',
    }).when('/registration', {
        templateUrl: '/views/registration.html',
        controller: 'registrationController'
    }).when('/', {
        templateUrl: '/views/login.html',
        controller: 'logInController'
    }).when('/home/:userName', {
        templateUrl: '/views/home.html',
        controller: 'homeController'
    }).otherwise({
        redirectTo: '/login'
    });
    $locationProvider.html5Mode(true);


}]);

// .service('sharedProperties', function ($rootScope, $timeout) {
//     var property;
//     return {
//         getProperty: function () {
//             console.log(this.property);
//             return property;
//         },
//
//         setProperty: function (value) {
//             console.log("in service");
//             property = value;
//             //$rootScope.$broadcast('data_shared');
//             $timeout(function(){
//                 $rootScope.$broadcast('data_shared');
//             },1000);
//         }
//     };
// });

// app.logInController.$inject = ['$scope', 'mySharedService'];
// registrationController.$inject = ['$scope', 'mySharedService'];
// homeController.$inject = ['$scope', 'mySharedService'];
