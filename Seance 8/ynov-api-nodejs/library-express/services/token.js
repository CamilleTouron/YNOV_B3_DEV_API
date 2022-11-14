var jwt = require('jsonwebtoken');

const payloadAdmin = {
    "date": new Date(),
    "admin": true
}

const payload = {
    "date": new Date(),
    "admin": false
}

exports.getToken = function (isAdmin) {
    const p=isAdmin?payloadAdmin:payload;
    try {
        return jwt.sign({
            data: p
        }, process.env.SECRET, { expiresIn: '1h' });
    } catch (err) {
        throw new Error('Pbm generating token');
    }
}

exports.checkToken = function (token) {
    try {
        return jwt.verify(token, pross.env.SECRET);
    } catch (err) {
        throw new Error('Token is bad, cheating is bad !');
    }
}