const Booking = require('./model');
const Boom = require('@hapi/boom');

const getBookings = () => {
    return Booking.query()
                .then(bookings => bookings)
                .catch(function(err) {
                    console.log(err);
                });
}

const getBookingById = (id) => {
    return  Booking.query()
                .findById(id)
                .then(booking => {
                    if (!booking) return Boom.notFound("Booking not found");

                    return booking;
                })
                .catch(function(err) {
                    console.log(err);
                });;
}

const createBooking = (payload) => {
    if (payload.hasOwnProperty('id')) return Boom.notAcceptable('Identifier should not be defined before insert');

    return Booking.query()
            .insert(payload)
            .returning('*')
            .catch(function(err) {
                console.log(err);
            });
}



module.exports = {
    getBookings: getBookings,
    getBookingById: getBookingById,
    createBooking: createBooking
};