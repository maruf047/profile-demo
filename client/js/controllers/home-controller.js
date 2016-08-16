/**
 * Created by GODFATHER on 12-08-16.
 */
app.controller('homeController', ['$scope', '$resource', '$location', '$routeParams', function ($scope, $resource, $location, $routeParams) {

    var ProfileApi = $resource('/api/get-profile');
    // console.log(session.name);
    // && session.name == $routeParams.userName
    if ($routeParams.userName != null) {
        var profile = new ProfileApi();
        profile.userName = $routeParams.userName;

        ProfileApi.query(profile, function (result) {
            var profile = result[0].result;
            console.log(profile[0].name);
            $scope.fullname = profile[0].name;
            $scope.aboutSelf = profile[0].aboutSelf;
            $scope.dateOfBirth = profile[0].dateOfBirth;
            $scope.sex = profile[0].sex;
        });

        $scope.logout = function () {
            $routeParams.userName = null;
            console.log("LoggingOut");
            $location.url('/login').replace();
        }
    } else {
        $location.url('/login');
    }
}]);