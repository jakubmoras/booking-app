'use strict';

angular.module('bookingApp').controller('dishModalController', function ($uibModalInstance, menu, booking) {
    const ctrl = this;
    this.booking = booking;
    this.menu = menu;
    this.portionsCount = booking.personsCount;

    this.calculatePrice = function () {
        ctrl.calculatedPrice = Number(ctrl.portionsCount) * Number(menu.Dish_Price);
    };

    this.ok = function () {
        $uibModalInstance.close({$value: {menu}});
    };

    this.cancel = function () {
        $uibModalInstance.dismiss();
    };

    this.calculatePrice();
});
