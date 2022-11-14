const axios = require('axios');

exports.getMeteo = (req, res, next) => {
   
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=43.61&longitude=1.43&hourly=temperature_2m')
        .then(function (response) {
            console.log('hola');
            console.log(response);
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