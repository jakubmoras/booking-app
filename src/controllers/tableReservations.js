'use strict';

function tableReservationsController($scope, $window, $uibModal) {

    $scope.formData = {
        personsCount: 2
    };

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
        const booking = angular.copy($scope.formData, {});
        const modalInstance = $uibModal.open({
            templateUrl: 'src/views/dishModal.tpl.html',
            controller: 'dishModalController',
            controllerAs: 'ctrl',
            windowTopClass: 'dialog-dish-modal',
            resolve: {
                dish: _.pick(dish, ['name', 'description']),
                booking: _.pick(booking, ['personsCount'])
            }
        });

        modalInstance.result.then(function (results) {
            if (_.isUndefined(results)) {
                console.log('no results passed');
                return;
            }
            $scope.selectedDishes.push(_.cloneDeep(results.$value.dish));
        }).catch(function (err) {
            if (err) {
                console.error(err);
            }
        });

        /*      const found = _.find($scope.selectedDishes, dish => dish.name == name);
             if (!found) {
                 $scope.selectedDishes.push({'name': dish.name})
                 console.log('aaa')
             }
             else {
                 $window.alert('Danie zostało już dodane')
             }*/
    }
};








