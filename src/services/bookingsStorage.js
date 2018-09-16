function bookingsStorageService() {

    const LS_KEY = 'BOOKING_APP_STORAGE';

    function addBooking(booking) {
        var bookings = getBookings();
        bookings.push(booking);
        localStorage.setItem(LS_KEY, JSON.stringify(bookings));
    }

    // @DEPRECATED
    function getBookings() {
        var bookings = localStorage.getItem(LS_KEY);
        if (bookings) {
            return JSON.parse(bookings);
        } else {
            return [];
        }
    }

    return {
        addBooking: addBooking,
        getBookings: getBookings
    }
}
