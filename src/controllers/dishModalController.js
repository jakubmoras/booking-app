'use strict';

angular.module('bookingApp').controller('dishModalController', function ($uibModalInstance, menu, booking) {
    const ctrl = this;
    //  this.dish = dish;
    this.booking = booking;
    this.menu = menu;

    this.calculatePrice = function () {
        console.log('sukcess')
        ctrl.calculatedPrice = Number(ctrl.portionsCount) * Number(menu.Dish_Price)
        console.log(ctrl.portionsCount, menu.Dish_Price)
    }

    this.ok = function () {
        $uibModalInstance.close({$value: {menu}});
    };

    this.cancel = function () {
        $uibModalInstance.dismiss();
    };
});
