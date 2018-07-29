// Scope handle view/controller bi-directional communication
// Scope's data used on View are called binding {{ }}
// View <- scope -> Controller

function createBookingController($scope, $timeout, bookingsStorageService) {

    var eventDetailTypeMap = {
        EVT_GENERAL_FIRM: [
            {id: 0, label: 'Firm A'},
            {id: 1, label: 'Firm B'}
        ],
        EVT_GENERAL_FAMILY: [
            {id: 0, label: 'Family A'},
            {id: 1, label: 'Family B'}
        ],
        EVT_GENERAL_OTHERS: [
            {id: 0, label: 'Others A'},
            {id: 1, label: 'Others B'}
        ]
    };

    $scope.bookingSuccessMessage = false;

    $scope.formData = {
        eventGeneralType: 'EVT_GENERAL_FIRM'
    };

    $scope.eventDetailTypeOptions = [];

    $scope.$watch('formData.eventGeneralType', function (newEventGeneralType) {
        if (newEventGeneralType) {
            $scope.eventDetailTypeOptions = eventDetailTypeMap[newEventGeneralType];
            $scope.formData.eventDetailType = $scope.eventDetailTypeOptions[0];
        }
    }, true);

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
