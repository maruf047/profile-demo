/**
 * Created by GODFATHER on 11-08-16.
 */
app.controller('logInController', ['$scope', '$resource', function ($scope, $resource) {

    var AuthenticationInformation = $resource('/api/login');

    // AuthenticationInformation.query(function (results) {
    //     console.log(results.body);
    // });

    $scope.authenticate = function () {

        var person = new AuthenticationInformation();
        person.userName = $scope.username;
        person.passWord = $scope.password;
        console.log(person);
        //
        // authenticationInformation.$save(function (result) {
        //     console.log(result.body);
        // });

        // authenticationInformation.$query(authenticationInformation,function (err, result) {
        //     console.log("Client Side: ");
        //     console.log(result);
        // });

        //
        AuthenticationInformation.query(person, function (result) {
            console.log("Log in completed:");
            //console.log(result.statusCode);
            console.log(result[0].passWord);
        })//.$promise.catch()
    }
}]);