const { Model } = require('objection');
const conf = require('../../../conf/conf');
const Knex = require('knex')(conf.dbConf);
Model.knex(Knex);

class User extends Model 
{
    static get tableName() 
    {
        return 'User';
    }

    static get relationMappings()
    {
        const Flight = require('../flights/model');

        return {
            flights: {
                relation: Model.HasManyRelation,
                modelClass: Flight,
                join: {
                    from: 'user.id',
                    to: 'flight.userId'
                }
            }
        };
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['firstName', 'lastName', 'email'],
            properties: {
                id : {type: 'integer'},
                firstName: {type: 'string', maxLength: 20},
                lastName: {type: 'string', maxLength: 20},
                email: {type: 'string', maxLength: 20, format: 'email'},
            }
        }
    }
}

module.exports = User;