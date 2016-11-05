/**
 * Created by GODFATHER on 11-08-16.
 */
app.controller('logInController', ['$scope', '$resource', '$location', '$routeParams', function ($scope, $resource, $location, $routeParams) {

    var AuthenticationInformation = $resource('/api/login');

    $scope.authenticate = function () {

        var auhtenticationInformation = new AuthenticationInformation();
        auhtenticationInformation.userName = $scope.username;
        auhtenticationInformation.passWord = $scope.password;
        console.log(auhtenticationInformation);

        AuthenticationInformation.save(auhtenticationInformation, function (result) {
            console.log(result);
            if (result.status == 200) {
                console.log(result.userName);
                $routeParams.userName = result.userName;
                $location.url('/home/' + $routeParams.userName).replace();
            } else {
                $scope.errorMessage = result.message;
            }
        });
    }
}]);
