function dataApi($http) {

    const apiBaseUrl = 'http://localhost:3000/';

    function getReservations() {
        return $http.get(apiBaseUrl + 'reservations').then(results => results.data);
    }

    function saveReservation(data) {
        return $http.post(apiBaseUrl + 'reservation', data);
    }

    return {
        getReservations,
        saveReservation
    }
}

angular.module('bookingApp').service('dataApi' , dataApi);
