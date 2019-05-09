const { Model } = require('objection');
const conf = require('../../../conf/conf');
const Knex = require('knex')(conf.dbConf);
Model.knex(Knex);

class Booking extends Model 
{
    static get tableName() 
    {
        return 'Booking';
    }

    static get relationMappings()
    {
        let Flight = require('../flights/model');
        let User = require('../users/model');

        return {
            flights: {
                relation: Model.BelongsToOneRelation,
                modelClass: Flight,
                join: {
                    from: 'booking.flightId',
                    to: 'flight.id'
                }
            },
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'booking.userId',
                    to: 'user.id'
                }
            }
        };
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['bookingDate', 'status', 'flightId', 'userId'],
            properties: {
                id : {type: 'integer'},
                userId: {type: 'integer'},
                flightId: {type: 'integer'},
                bookingDate: {type: 'date'},
                status: {type: 'string', maxLength: 20}
            }
        }
    }
}

module.exports = Booking;