function mainPageController($scope, $location, storeEmailService) {

    $scope.formData = {};

    $scope.storeEmail = function () {
        var usermail = $scope.formData.userMail;
        storeEmailService.addMail(usermail);
        $scope.formData.userMail = "";
        $location.path('/add');
    }
}