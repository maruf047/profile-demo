/**
 * Created by GODFATHER on 11-08-16.
 */
app.controller('logInController', ['$scope', '$resource', function ( $scope, $resource) {

    var AuthenticationInformation = $resource('/api/login');

    $scope.authenticate = function () {

        var authenticationInformation = new AuthenticationInformation();
        authenticationInformation.userName = $scope.username;
        authenticationInformation.passWord = $scope.password;
        console.log(authenticationInformation);

        authenticationInformation.$find(function (result) {
            console.log(result.body);
        });
    }
}]);