const confDB=require('../db.config');
const { Sequelize } = require('sequelize');

let sequelize = null;

/*exports.start=()=>{
    sequelize = new Sequelize(confDB.database, confDB.username, confDB.password, {
        host: confDB.hostname,
        dialect: confDB.dialect
    });
    test();
};

async function test(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

exports.stop=()=>{
    sequelize.close();
}*/

const instance = new Sequelize(confDB.database, confDB.username, confDB.password, {
    host: confDB.hostname,
    dialect: confDB.dialect
});
module.exports={
    instance,
    user:require('./users')(instance),
}