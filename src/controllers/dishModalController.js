'use strict';

angular.module('bookingApp').controller('dishModalController', function ($uibModalInstance, dish, booking) {
    const ctrl = this;
    this.dish = dish;
    this.booking = booking;

    this.calculatePrice = function (portionsCount) {
        ctrl.dish.calculatedPrice = portionsCount * ctrl.booking.personsCount;
    };

    this.ok = function () {
        $uibModalInstance.close({$value: {dish}});
    };

    this.cancel = function () {
        $uibModalInstance.dismiss();
    };
});
