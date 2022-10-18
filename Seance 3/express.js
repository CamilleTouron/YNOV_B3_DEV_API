const express = require('express');
const app = express();
app.get('/',(req,res,next)=>{
    //code
});
app.get('/',(req,res,next)=>{
    res.json({success:true,message:'test'})
});
app.listen(3000);