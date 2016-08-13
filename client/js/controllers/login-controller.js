/**
 * Created by GODFATHER on 11-08-16.
 */
app.controller('logInController', ['$scope', '$resource', function ($scope, $resource) {

    var AuthenticationInformation = $resource('/api/login');

    // AuthenticationInformation.query(function (results) {
    //     console.log(results.body);
    // });

    $scope.authenticate = function () {

        var authenticationInformation = new AuthenticationInformation();
        authenticationInformation.userName = $scope.username;
        authenticationInformation.passWord = $scope.password;
        console.log(authenticationInformation);
        //
        // authenticationInformation.$save(function (result) {
        //     console.log(result.body);
        // });

        // authenticationInformation.$query(authenticationInformation,function (err, result) {
        //     console.log("Client Side: ");
        //     console.log(result);
        // });

        //
        AuthenticationInformation.query({'userName': 'bender', 'passWord': '123456'}, function (status, result) {
            console.log(result);
        })
    }
}]);