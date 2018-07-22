function listBookingsController($scope, bookingsStorageService) {

    $scope.bookings = bookingsStorageService.getBookings();

    $scope.sortConfig = {
        text: '',
        sign: '',
        property: ''
    };

    $scope.toggleSort = function (propertyName) {
        const currentSign = $scope.sortConfig.text.substr(0, 1);
        const currentSortProperty = $scope.sortConfig.text.substr(1, $scope.sortConfig.text.length);
        var sign = '+';
        if (propertyName == currentSortProperty && currentSign == '+') {
            sign = '-';
        }
        $scope.sortConfig.text = sign + propertyName;
        $scope.sortConfig.sign = sign;
        $scope.sortConfig.property = propertyName;
    };
}
