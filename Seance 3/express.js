const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.json({success:true,message:'hello'})
});
app.listen(3000);