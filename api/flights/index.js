'use strict';

const service = require('./service');

module.exports = {
    name: "FlightPlugin",
    register: async (server, options) => {
    
      server.route([
        {
          method: "GET",
          path: "/flights",
          handler: async (request, h) => {
            return service.getFlights();
          }
        },
        {
          method: "GET",
          path: "/flights/{id}",
          handler: async (request, h) => {
            return service.getFlightById(request.params.id);
          }
        },
        {
            method: "POST",
            path: "/flights",
            handler: async (request, h) => {
              return service.createFlight(request.payload);
            }
        }
      ]);
    }
  }