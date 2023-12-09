var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Es la página principal usando Node y Express');
});

app.get('/minombre', function(req,res){
    res.send('Ricardo André Lazo Torres');
});

app.get('/nomdocente', function(req,res){
    res.send('Diego Medardo Saavedra Garcia');
});

app.get('/materia', function(req,res){
    res.send('Desarrollo web avanzado');
})

app.listen(3000, function(){
    console.log("OK");
});