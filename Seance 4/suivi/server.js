const app = require('./app');

app.get('/id',(req,res)=>{
    res.json({success:true,message:'id'})
});

app.listen(3000, ()=>{
    console.log('running');
});