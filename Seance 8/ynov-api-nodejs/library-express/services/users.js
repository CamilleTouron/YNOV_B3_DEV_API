const reviewsService = require('./reviews');
const passwordService = require('./password');

const db = require('../models');

exports.getUsers = async () => {
    return await db.users.findAll();
}

exports.getUserById = async  (id) => {
    return await db.users.findAll({
        where: {
            id
        }
    });
}

exports.addUser = (id, firstName, lastName, isAdmin, password) => {
    if (id!=null && firstName!=null && lastName!=null && password!=null && isAdmin!=null) {
        const userById = module.exports.getUserById(id);
        if (userById!=null) {
            const passwordEncoded=passwordService.crypt(password);
            return db.users.create({id, firstName, lastName , passwordEncoded, isAdmin});
        } else {
            throw new Error('A user with this id already exists');
        }
    } else {
        throw new Error('All parameters are required');
    }
}

exports.deleteUserById = function deleteUserBy(id) {
    return db.users.destroy({
        where: {
            id
        }
    });
}


