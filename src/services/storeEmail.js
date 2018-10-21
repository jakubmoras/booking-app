function storeEmailService() {
    const LS_KEY1 = 'USER_MAIL';

    function addMail(userMail) {
        localStorage.setItem(LS_KEY1, userMail);
    }

    function getMail() {
        return localStorage.getItem(LS_KEY1);
    }

    return {
        addMail: addMail,
        getMail: getMail
    }
}

angular.module('bookingApp').service('storeEmailService', storeEmailService);
