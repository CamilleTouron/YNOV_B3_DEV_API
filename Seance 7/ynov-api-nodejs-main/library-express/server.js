const app = require('./app');
const db = require('./models/index');

db.instance.sync({force:true}).then(()=>{//Force par defaut à faux
    console.log('Database connected an synchronized');
    app.listen(8888, () => {
        console.log('Server running on port 8888 !');
    });
}).catch((e)=>{
    console.error(e);
})
