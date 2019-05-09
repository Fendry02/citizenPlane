const User = require('./model');
const Boom = require('@hapi/boom');

const getUsers = () => {
    return User.query()
            .returning('*')
            .catch(function(err) {
                console.log(err);
            });
}

const getUserById = (id) => {
    return User.query()
            .findById(id)
            .then(user => {
                if (!user) return Boom.notFound("User not found");

                return user;
            })
            .catch(function(err) {
                console.log(err);
            });
}

const getUsersByFilter = (param) => {
    return User.query()
            .where(param)
            .returning('*');
}

module.exports = {
    getUsers: getUsers,
    getUserById: getUserById,
    getUsersByFilter: getUsersByFilter
};