'use strict';

const service = require('./service');

module.exports = {
    name: "BookingPlugin",
    register: async (server, options) => {
    
      server.route([
        {
          method: "GET",
          path: "/bookings",
          handler: async (request, h) => {
            return service.getBookings();
          }
        },
        {
          method: "GET",
          path: "/bookings/{id}",
          handler: async (request, h) => {
            return service.getBookingById(request.params.id);
          }
        },
        {
            method: "POST",
            path: "/bookings",
            handler: async (request, h) => {
              return service.createBooking(request.payload);
            }
        }
      ]);
    }
  }