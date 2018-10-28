function mainPageController($scope, $location) {

    $scope.formData = {};

    $scope.storeEmail = function () {
        const userMail = $scope.formData.userMail;
        // TODO handle email saving
        console.log('handle email saving');
        $scope.formData.userMail = "";
        $location.path('/add');
    };

    $scope.checkValue = function () {
        const reservation = $scope.reservationType;
        if (reservation == "1") {
            $location.path('/add');
        }
        else {
            // todo dorobić kolejne przejście do okna rezerwacji z cateringiem
        }
    };
};
