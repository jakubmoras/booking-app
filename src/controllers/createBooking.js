// Scope handle view/controller bi-directional communication
// Scope's data used on View are called binding {{ }}
// View <- scope -> Controller

function createBookingController($scope, $timeout, bookingsStorageService) {

    $scope.bookingSuccessMessage = false;

    $scope.formData = {}; // declare empty object

    $scope.submitForm = function () {
        var booking = angular.copy($scope.formData, {});
        bookingsStorageService.addBooking(booking);
        $scope.formData = {};
        $scope.bookingSuccessMessage = true;
        $timeout(function () {
            $scope.bookingSuccessMessage = false;
        }, 3000);
    }
}
