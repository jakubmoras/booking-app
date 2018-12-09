'use strict';

function tableReservationsController($scope, $window, $timeout, $uibModal, dataApi) {

    $scope.imIndexCount = 0;
    $scope.selected = false;
    const menu = {};
    const extras = {};
    var circles = [];
    $scope.currentIndex = 0;

    $scope.formData = {
        personsCount: 0
    };
    $scope.personLabels = [];
    $scope.visitCardNames = [];
    $scope.selectedDishes = [];
    $scope.selectedExtras = [];
    $scope.viewReady = false;

    $scope.menuTabs = [
        {id: 1, name: 'Przystawki'},
        {id: 2, name: 'Dania główne'},
        {id: 3, name: 'Napoje'}];

    $scope.extras = {
        'Visit Card': [],
        'Napkin': [],
        'Candle': []
    };
    $scope.images = {
        'Visit Card': false,
        'Napkin': false,
        'Candle': false
    };

    function init() {
        dataApi.getMenu().then(menu => {
            $scope.menu = menu;
        });
        $timeout(() => {
            $scope.viewReady = true;
        }, 50);
    };

    $scope.onExtrasToggle = function (category) {
        dataApi.getExtras(category).then(extras => {
            $scope.extras[category] = extras;
            for (var im = 0; im <= 8; im++) {
                $scope.extras[category][im].visible = true
            }
        });
    };

    $scope.next = function (category) {
        if (8 + $scope.imIndexCount < $scope.extras[category].length - 1) {
            $scope.imIndexCount = $scope.imIndexCount + 1;
            $scope.extras[category].forEach(function (image) {
                image.visible = false;
            });
            for (var im = $scope.imIndexCount; im <= 8 + $scope.imIndexCount; im++) {
                $scope.extras[category][im].visible = true
            }
        }
    };
    $scope.previous = function (category) {
        if ($scope.imIndexCount - 1 > 0) {
            $scope.imIndexCount = $scope.imIndexCount - 1
        }
        $scope.extras[category].forEach(function (image) {
            image.visible = false;
        })
        for (var im = $scope.imIndexCount; im <= 8 + $scope.imIndexCount; im++) {
            $scope.extras[category][im].visible = true
        }
    };
    $scope.checkChoosen = function (id, category) {
        $scope.images[category] = $scope.extras[category].find(image => image.Id === id);
    };

    $scope.visitCardSelect = function () {
        const booking = angular.copy($scope.formData, {});
        const modalInstance = $uibModal.open({
            templateUrl: 'src/views/visitCardModal.tpl.html',
            controller: 'visitCardModalController',
            controllerAs: 'ctrl',
            windowTopClass: 'dialog-dish-modal',
            backdrop: false,
            resolve: {
                booking: _.pick(booking, ['personsCount']),
                menu: _.clone(menu, true)
            }
        });

        modalInstance.result.then(function (results) {
            $scope.visitCardNames.push(_.cloneDeep(results.$value.obiekt));
        }).catch(function (err) {
            console.log(err);
        })
    };
    $scope.extrasCategorySelect = function (category) {

        var showButton = category == 'Visit Card' ? 'true' : 'false';
        var index = $scope.selectedExtras.findIndex(x => x.category == category);
        if (index == -1) {
            $scope.selectedExtras.push({
                category: category,
                selectedImageName: $scope.images[category].Description,
                showButton: showButton,
            })
        }
        else {
            $scope.selectedExtras[index].selectedImageName = $scope.images[category].Description;
        }
    };

    $scope.addRow = function (menu) {
        const booking = angular.copy($scope.formData, {});
        const modalInstance = $uibModal.open({
            templateUrl: 'src/views/dishModal.tpl.html',
            controller: 'dishModalController',
            controllerAs: 'ctrl',
            windowTopClass: 'dialog-dish-modal',
            resolve: {
                booking: _.pick(booking, ['personsCount']),
                menu: _.clone(menu, true)
            }
        });

        modalInstance.result.then(function (results) {
            if (_.isUndefined(results)) {
                console.log('no results passed');
                return;
            }
            $scope.selectedDishes.push(_.clone(results.$value.menu));
            console.log(results.$value.menu)
        }).catch(function (err) {
            if (err) {
                console.error(err);
            }
        });
    };


    init();

};
