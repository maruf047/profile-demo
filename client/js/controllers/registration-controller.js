/**
 * Created by GODFATHER on 11-08-16.
 */
app.controller('registrationController', ['$scope', '$resource', '$location', '$timeout', 'dateFilter', function ($scope, $resource, $location, $timeout, dateFilter) {

    var PersonApi = $resource('/api/person-register');

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

        var person = new PersonApi();
        person.name = $scope.firstName + " " + $scope.secondName;
        console.log($scope.dateString);
        person.dateOfBirth = $scope.dateString;
        person.sex = $scope.sex.gender;
        person.aboutSelf = $scope.aboutYourself;
        person.userName = $scope.username;
        person.passWord = $scope.password;
        console.log(person);
        person.$save(function (results) {
            console.log(results.message);
            if (results.status == 201) {
                $scope.customStyle = {
                    "width": "300px",
                    "height": "30px",
                    "margin-top": "10px",
                    "margin-left": "100px",
                    "color": "green"
                };
                $scope.message = results.message;
                $timeout(function () {
                    $location.url('/login');
                }, 1500);
            } else {
                $scope.customStyle = {
                    "width": "300px",
                    "height": "30px",
                    "margin-top": "10px",
                    "margin-left": "100px",
                    "color": "red"
                };
                $scope.message = results.message;
            }
        });
    }
}]);
