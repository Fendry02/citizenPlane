'use strict';

const service = require('./service');
const Booking = require('./model');
const helper = require('../helper');

module.exports = {
    name: "BookingPlugin",
    register: async (server, options) => {
    
      server.route([
        {
            method: "GET",
            path: "/bookings",
            handler: async (request, h) => {
              // Si pas de paramètre dans la query, alors on renvoie tous les bookings
              if (Object.keys(request.query).length === 0) return service.getBookings();

              // On récupère les propriétés du schéma 
              let properties = Object.keys(Booking.jsonSchema.properties);
              // On récupère les propriétés communes avec les paramètres de la query
              let commonParams = helper.getCommonAttributes(request.query, properties);

              return service.getBookingsByFilter(commonParams);
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