Webinar.DateController = function ($scope) {
    var currentDate = 0;

    $scope.changeDate = function () {
        currentDate = new Date().getTime();
    };

    $scope.currentDate = function () {
        return currentDate;
    }
};