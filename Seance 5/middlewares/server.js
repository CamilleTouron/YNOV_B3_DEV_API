const app = require('./app');
const cors = require('cors');
app.use('/*',cors);
app.listen(3000, ()=>{
    console.log('running');
});