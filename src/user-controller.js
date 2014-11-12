Webinar.UserController = function ($scope, $http) {
    $scope.userName = null;

    $scope.getUserNameFromServer = function () {
        var readUsernameFromResponse = function (response) {
            $scope.userName = response.name;
        };

        $http.post('/user/name').success(readUsernameFromResponse);
    };
};