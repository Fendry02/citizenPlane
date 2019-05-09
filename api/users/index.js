'use strict';

const service = require('./service');
const helper = require('../helper');
const User = require('./model');

module.exports = {
    name: "UserPlugin",
    register: async (server, options) => {
    
      server.route([
        {
            method: "GET",
            path: "/users",
            handler: async (request, h) => {
              // Si pas de paramètre dans la query, alors on renvoie tous les users
                if (Object.keys(request.query).length === 0) return service.getUsers();

                // On récupère les propriétés du schéma 
                let properties = Object.keys(User.jsonSchema.properties);
                // On récupère les propriétés communes avec les paramètres de la query
                let commonParams = helper.getCommonAttributes(request.query, properties);

                return service.getUsersByFilter(commonParams);
            }
        },
        {
            method: "GET",
            path: "/users/{id}",
            handler: async (request, h) => {
                return service.getUserById(request.params.id);
            }
        }
      ]);
    }
  }