function dataApi($http) {

    const apiBaseUrl = 'http://localhost:3000/';

    function getReservations() {
        return $http.get(apiBaseUrl + 'reservations').then(results => results.data);
    }

    return {
        getReservations
    }
}
