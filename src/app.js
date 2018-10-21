angular.module('bookingApp',['ngRoute','ui.bootstrap' ]);

angular.module('bookingApp').config(['$routeProvider', function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'src/views/main.html',
            controller: mainPageController
        })
        .when('/add', {
            controller: createBookingController,
            templateUrl: 'src/views/create.html'
        })
        .when('/list', {
            controller: listBookingsController,
            templateUrl: 'src/views/list.html'
        })
        .when('/tablereservation', {
            controller:  tableReservationsController,
            templateUrl: 'src/views/tablereservation.html'
        })

        .otherwise('/');
}]);

