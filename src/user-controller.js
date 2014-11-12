Webinar.UserController = function ($scope, $http, $window) {
    $scope.userName = null;

    $scope.getUserNameFromServer = function () {
        var readUsernameFromResponse = function (response) {
            $scope.userName = response.name;
        };

        $http.post('/user/name').success(readUsernameFromResponse);
    };

    $scope.openUserInfo = function () {
        $window.open('/user/show');
    };
};