const userService=require('./users');
const tokenService = require('./token');
exports.loggin = async(id, password) => {
    if (id != null && password != null) {
        const userById = await userService.getUserById(id);
        console.log(userById);
        console.log(userById.dataValues.password);
        if (userById!=null && userById.dataValues.password!=null) {
            console.log(userById.password);
            const passwordEncoded=passwordService.compare(password,userById.dataValues.password);
            if(passwordEncoded){
                res.setHeader('auth', tokenService.getToken(userById.dataValues.isAdmin));
                return  tokenService.getToken(userById.isAdmin);
            }else{
                throw new Error('Password does not match');
            }
        } else {
            console.log("oups")
            throw new Error('No user with this id exist');
        }
    } else {
        throw new Error('All parameters are required');
    }
}