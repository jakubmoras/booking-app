'use strict';

function tableReservationsController($scope, $window, $uibModal, dataApi,) {

    const menu = {};
    var circles = [];
    $scope.formData = {
        personsCount: 0
    };
    $scope.personLabels = [];

    function init() {
        dataApi.getMenu().then(menu => {
            $scope.menu = menu;
        });
    };

    $scope.drawCircles = function () {
        if ((personCount) !== 0) {
            var personCount = $scope.formData.personsCount;
            circles.splice(0, circles.length);
            const canvasElem = document.getElementById('canvas');
            const ctx = canvasElem.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var x = 30;
            var y = 20;

            for (var i = 0; i <= (personCount - 1); i++) {
                if ((i) % 2 !== 0) {
                    y = 95;
                }
                else {
                    y = 25;
                    if (i > 1) {
                        x = x + 30
                    }
                }

                circles.push({
                    x1: x,
                    y1: y,
                    radius: 10,
                    color: 'rgb(0,255,0)',
                    count: i + 1
                });
            }
            circles.forEach(circle => {
                    ctx.beginPath();
                    ctx.arc(circle.x1, circle.y1, circle.radius, 0, 2 * Math.PI);
                    ctx.fillStyle = circle.color;
                    ctx.fill();
                    ctx.fillStyle = 'black';
                    ctx.fillText(circle.count, circle.x1 - 3, circle.y1 + 2);
                }
            );
            ctx.strokeRect(23, 40, x - 15, 40);
        }
    };
    $scope.personLabelTable = function () {
        let personCountChange = $scope.formData.personsCount - $scope.personLabels.length;
        if (personCountChange > 0) {
            for (var s = 1; s <= personCountChange; s++) {
                $scope.personLabels.push({
                    zmienna: $scope.personLabels.length + 1,
                });
            }
        }
        else {
            $scope.personLabels.splice($scope.personLabels.length - Math.abs(personCountChange), Math.abs(personCountChange))

        }
    }

    function isIntersect(point, circle) {
        return Math.sqrt((point.x - circle.x1) ** 2 + (point.y - circle.y1) ** 2) < circle.radius;
    }

    canvas.addEventListener('click', (e) => {
        var rect = canvas.getBoundingClientRect();
        const point = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
        circles.forEach(circle => {
            if (isIntersect(point, circle)) {
                $window.alert("Kliknąłeś w kropkę" + circle.count)
            }
        });
    });


    $scope.selectedDishes = [];

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
            $scope.selectedDishes.push(_.cloneDeep(results.$value.menu));
            console.log(results.$value.menu)
        }).catch(function (err) {
            if (err) {
                console.error(err);
            }
        });
    };
    /*      const found = _.find($scope.selectedDishes, dish => dish.name == name);
         if (!found) {
             $scope.selectedDishes.push({'name': dish.name})
             console.log('aaa')
         }
         else {
             $window.alert('Danie zostało już dodane')
         }*/

    init();
};
