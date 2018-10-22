'use strict';

angular.module('bookingApp').controller('dishModalController', function ($uibModalInstance, dish) {

    this.dish = dish;

    this.ok = function () {
        $uibModalInstance.close();
    };

    this.cancel = function () {
        $uibModalInstance.dismiss();
    };
});

function tableReservationsController($scope, $window, $uibModal) {
    $scope.dishes = [
        {
            'name': 'Krewetki królewskie',
            'description': "to jest opis krewetki"
        },
        {
            'name': 'Tatar z polędwicy wołowej',
            'description': "to jest opis tatara"
        },
        {
            'name': 'Baby calamaries',
            'description': "to jest opis kalmarów"
        },

    ];
    $scope.selectedDishes = [];

    $scope.addRow = function (dish) {
        $uibModal.open({
            templateUrl: 'src/views/dishModal.tpl.html',
            controller: 'dishModalController',
            controllerAs: 'ctrl',
            windowTopClass: 'dialog-dish-modal',
            resolve: {
                dish: _.pick(dish, ['name', 'description'])
            }
        });
        const found = _.find($scope.selectedDishes, dish => dish.name == name);
        if (!found) {
            $scope.selectedDishes.push({'name': name})
        }
        else {
            $window.alert('Danie zostało już dodane')
        }
    }
};








