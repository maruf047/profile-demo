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

        AuthenticationInformation.query(auhtenticationInformation, function (result) {
            console.log(result);
            if (result[0].status == 200) {
                console.log(result[0].userName);
                $routeParams.userName = result[0].userName;
                $location.url('/home/' + $routeParams.userName).replace();
            }else{
                $scope.errorMessage = result[0].message;
            }
        });
    }
}]);