function mainPageController($scope, $location, storeEmailService) {

    $scope.formData = {};

    $scope.storeEmail = function () {
        var usermail = $scope.formData.userMail;
        storeEmailService.addMail(usermail);
        $scope.formData.userMail = "";
        $location.path('/add');
    };

    $scope.checkValue = function () {
        var reservation = $scope.reservationType;
        if (reservation == "1") {
            $location.path('/add');
        }
        else {
            // todo dorobić kolejne przejście do okna rezerwacji z cateringiem
        }
    };
};
