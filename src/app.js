angular.module('bookingApp', ['ngRoute']);

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
        .otherwise('/');
}]);

angular.module('bookingApp').service('bookingsStorageService', bookingsStorageService);
angular.module('bookingApp').service('storeEmailService' , storeEmailService);
angular.module('bookingApp').service('dataApi' , dataApi);
