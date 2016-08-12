/**
 * Created by GODFATHER on 11-08-16.
 */
app.controller('registrationController', ['$scope', '$resource', 'dateFilter', function ($scope, $resource, dateFilter) {

    var Person = $resource('/api/person-register');

    $scope.date = new Date();

    $scope.Sexes = [{
        id: 1,
        gender: 'Female'
    }, {
        id: 2,
        gender: 'Male'
    }];


    $scope.$watch('date', function (date) {
        $scope.dateString = dateFilter(date, 'dd-MM-yyyy');
    });

    $scope.$watch('dateOfBirthString', function (dateString) {
        $scope.date = new Date(dateString);
    });

    $scope.registerPerson = function () {

        var person = new Person();
        person.name = $scope.firstName + " " + $scope.secondName;
        person.date = $scope.dateString;
        person.sex = $scope.sex.gender;
        person.aboutSelf = $scope.aboutYourself;
        person.userName = $scope.username;
        person.passWord = $scope.password;
        console.log(person);
        person.$save(function (result) {
            console.log(result.body);
        });
    }
}]);
