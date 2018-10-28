'use strict';

function listBookingsController($scope, dataApi) {

    $scope.sortConfig = {
        text: '',
        sign: '',
        property: ''
    };

    function init() {
        dataApi.getReservations().then(reservations => {
            $scope.bookings = reservations;
        });
    }

    $scope.toggleSort = function (propertyName) {
        const currentSign = $scope.sortConfig.text.substr(0, 1);
        const currentSortProperty = $scope.sortConfig.text.substr(1, $scope.sortConfig.text.length);
        let sign = '+';
        if (propertyName == currentSortProperty && currentSign == '+') {
            sign = '-';
        }
        $scope.sortConfig.text = sign + propertyName;
        $scope.sortConfig.sign = sign;
        $scope.sortConfig.property = propertyName;
    };

    init();
}
