angular.module('bookingApp').controller('visitCardModalController', function ($uibModalInstance, menu, booking) {
    const ctrl = this;
    this.booking = booking;
    this.menu = menu;
    this.portionsCount = booking.personsCount;
    this.visitCardPerson1 = [];

    this.visitCardPerson = function (){
    for(i=0; i<= ctrl.portionsCount-1; i++){
        ctrl.visitCardPerson1.push(
            { personId: 'Miejsce ' + (i+1),
             name:''}
        );
    }
    };
    this.ok = function () {
      console.log(this.visitCardPerson1);
      var obiekt = ctrl.visitCardPerson1;
      var selected = true;
        console.log(obiekt);
        $uibModalInstance.close({$value: {obiekt}});
    };

    this.cancel = function () {
        $uibModalInstance.dismiss();
    };

    this.visitCardPerson();
});