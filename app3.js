var express = require('express');
var http = require('http'); 
var fs = require('fs');

var app = express();
var server = http.createserver(app3);

app.get('/', function(req, res){
    res.send('<h1>Express works!!!</h1>');
});
app.get('/tasks', function(req, res){
    fs.readFile('./db.json',function(err, data){
        var task = JSON.parse(data.toString()).tasks;
        res .send(tasks);
    });
});

 
 app.listen(3000, function(){
    console.log('server listening to port 3000');
 });