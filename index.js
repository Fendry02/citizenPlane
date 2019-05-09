'use strict';

const Hapi = require('@hapi/hapi');
const conf = require('./conf/conf');
const users = require('./modules/api/users');
const flights = require('./modules/api/flights');
const bookings = require('./modules/api/bookings');


const init = async () => {

    const server = Hapi.server(conf.serverConf);

    await server.register([users, flights, bookings]);
    await server.start();

    console.log('Server running on %ss', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();