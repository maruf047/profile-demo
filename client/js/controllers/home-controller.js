/**
 * Created by GODFATHER on 12-08-16.
 */
app.controller('homeController', ['$scope', '$resource', function ($scope, $resource) {

    var ProfileApi = $resource('/api/get-profile');

    ProfileApi.query(function (result) {
        console.log(result);
    })
}]);