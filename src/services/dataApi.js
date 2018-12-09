function dataApi($http) {

    const apiBaseUrl = 'http://localhost:3000/';

    function getReservations() {
        return $http.get(`${apiBaseUrl}reservations`).then(results => results.data);
    }

    function saveReservation(data) {
        return $http.post(`${apiBaseUrl}reservation`, data);
    }

    function getMenu() {
        return $http.get(`${apiBaseUrl}menu`).then(results => results.data);
    }

    function getExtras(category) {
        return $http.get(`${apiBaseUrl}extras/${category}`).then(results => results.data);
    }

    return {
        getReservations,
        saveReservation,
        getMenu,
        getExtras
    }
}

angular.module('bookingApp').service('dataApi', dataApi);
