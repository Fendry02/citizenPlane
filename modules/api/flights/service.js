const Flight = require('./model');
const Boom = require('@hapi/boom');

const getFlights = () => {
    return Flight.query()
            .then(flights => flights)
            .catch(function(err) {
                console.log(err);
            });
}

const getFlightById = (id) => {
    return Flight.query()
                .findById(id)
                .then(flight => {
                    if (!flight) return Boom.notFound("Flight not found");

                    return flight;
                })
                .catch(function(err) {
                    console.log(err);
                });;
}

const createFlight = (payload) => {
    let validStatus = ['OPEN', 'CLOSED', 'CANCELED'];

    if (payload.hasOwnProperty('status') && validStatus.indexOf(payload.status) === -1) return Boom.notAcceptable('Status incorrect');
    else if (payload.hasOwnProperty('id')) return Boom.notAcceptable('Identifier should not be defined before insert');

    return Flight.query()
            .insert(payload)
            .returning('*')
            .catch(function(err) {
                console.log(err);
            });
}

module.exports = {
    getFlights: getFlights,
    getFlightById: getFlightById,
    createFlight: createFlight
};