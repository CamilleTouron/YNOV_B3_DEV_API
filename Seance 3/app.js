const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const serveur = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello');
});

serveur.listen(port,hostname, ()=>{
    console.log('running');
})