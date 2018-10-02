// Scope handle view/controller bi-directional communication
// Scope's data used on View are called binding {{ }}
// View <- scope -> Controller

function createBookingController($scope, $timeout, dataApi) {

    var eventDetailTypeMap = {
        FIRM: [
            {id: 'FIRM_A', label: 'Firm A'},
            {id: 'FIRM_B', label: 'Firm B'}
        ],
        FAMILY: [
            {id: 'FAMILY_A', label: 'Family A'},
            {id: 'FAMILY_B', label: 'Family B'}
        ],
        OTHERS: [
            {id: 'OTHERS_A', label: 'Others A'},
            {id: 'OTHERS_B', label: 'Others B'}
        ]
    };

    $scope.bookingSuccessMessage = false;

    $scope.formData = {
        eventGeneralType: 'FIRM'
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
        booking.time = new Date();
        booking.eventDetailType = booking.eventDetailType.id;
        dataApi.saveReservation(booking).then(() => {
            $scope.formData = {};
            $scope.bookingSuccessMessage = true;
            $timeout(function () {
                $scope.bookingSuccessMessage = false;
            }, 3000);
        }).catch(e => {
            console.error('Error on network communication');
            console.error(e);
        });
    }
}
