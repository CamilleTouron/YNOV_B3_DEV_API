const axios = require('axios');
var cache = require('memory-cache');

exports.getMeteo = (req, res, next) => {
   
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=43.61&longitude=1.43&hourly=temperature_2m')
        .then(function (response) {
            console.log(response);
            setClientCache(req, res, next);
            setServerCache(req,res,next);
            getServerCache(req,res,next);
            res.json({ success: true, res: response.data });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

function setClientCache(req, res, next) {
    res.setHeader('TEST', 'CAMILLE');
    next();
}

function setServerCache(req, res, next) {
    console.log("set server cache");
    cache.put("test","camille",1000);
    next();
}
function getServerCache(req, res, next) {
    console.log("get server cache");
    var cacheTest = cache.get("test");
    console.log(cacheTest);
    next();
}
