'use strict';

const service = require('./service');
const helper = require('../helper');
const Flight = require('./model');

module.exports = {
    name: "FlightPlugin",
    register: async (server, options) => {
    
      server.route([
        {
            method: "GET",
            path: "/flights",
            handler: async (request, h) => {
                // Si pas de paramètre dans la query, alors on renvoie tous les flights
                if (Object.keys(request.query).length === 0) return service.getFlights();

                // On récupère les propriétés du schéma 
                let properties = Object.keys(Flight.jsonSchema.properties);
                // On récupère les propriétés communes avec les paramètres de la query
                let commonParams = helper.getCommonAttributes(request.query, properties);

                return service.getFlightsByFilter(commonParams);
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