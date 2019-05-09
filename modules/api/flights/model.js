const { Model, ValidationError } = require('objection');
const conf = require('../../../conf/conf');
const Knex = require('knex')(conf.dbConf);
const Boom = require('@hapi/boom');
Model.knex(Knex);

class Flight extends Model 
{
    static get tableName() {
        return 'Flight';
    }

    static get relationMappings() {
        let User = require('../users/model');
        let Booking = require('../bookings/model');

        return {
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'flight.userId',
                    to: 'user.id'
                }
            },
            bookings: {
                relation: Model.HasManyRelation,
                modelClass: Booking,
                join: {
                    from: 'flight.id',
                    to: 'booking.flightId'
                }
            }
        };
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['origin', 'destination', 'departureDate', 'price', 'nbAvailableSeats', 'status'],
            properties: {
                id : {type: 'integer'},
                userId: {type: 'integer'},
                origin: {type: 'string', minLength: 3, maxLength: 3},
                destination: {type: 'string', minLength: 3, maxLength: 3},
                price: {type: 'integer'},
                nbAvailaibleSeats: {type: 'integer'},
                status: {type: 'string', maxLength: 20}
            }
        }
    }
}

module.exports = Flight;