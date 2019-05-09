'use strict';

const service = require('./service');

module.exports = {
    name: "UserPlugin",
    register: async (server, options) => {
    
      server.route([
        {
          method: "GET",
          path: "/users",
          handler: async (request, h) => {
            return service.getUsers();
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