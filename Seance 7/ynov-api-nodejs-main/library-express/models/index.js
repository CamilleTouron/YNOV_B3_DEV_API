const confDB=require('../db.config');
const { Sequelize } = require('sequelize');

const instance = new Sequelize(confDB.database, confDB.username, confDB.password, {
    host: confDB.hostname,
    dialect: confDB.dialect
});
module.exports={
    instance,
    user:require('./users')(instance),
}