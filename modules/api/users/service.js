const User = require('./model');
const Boom = require('@hapi/boom');

const getUsers = () => {
    return User.query()
            .then(users => users)
            .catch(function(err) {
                console.log(err);
            });
}

const getUserById = (id) => {
    return  User.query()
                .findById(id)
                .then(user => {
                    if (!user) return Boom.notFound("User not found");

                    return user;
                })
                .catch(function(err) {
                    console.log(err);
                });
}

module.exports = {
    getUsers: getUsers,
    getUserById: getUserById
};