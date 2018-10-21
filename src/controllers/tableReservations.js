function tableReservationsControler($scope, $window) {
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

    $scope.addRow = function (name) {

        const found = _.find($scope.selectedDishes, dish => dish.name == name);
        if (!found) {
            $scope.selectedDishes.push({'name': name})
        }
        else {
            $window.alert('Danie zostało już dodane')
        }
    }
};








