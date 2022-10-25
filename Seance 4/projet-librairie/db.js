const { Sequelize } = require('sequelize');
let sequelize = null;
exports.start=()=>{
    sequelize = new Sequelize('ynovlibrairie', 'camille', 'camille', {
        host: 'localhost',
        dialect: 'mysql'
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
exports.stop
exports.stop=()=>{
    sequelize.close();
}
