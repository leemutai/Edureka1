var http = require('http');
var events = require('events');

var eventEmitter = new events.EventEmitter();

var server = http.createServer(function(req, res){
    eventEmitter.emit('someone reqquested','TEST');
    res.end('server works!!!');

});

eventEmitter.on('someone requested', function(data){
    console.log('a request has been done on the server', data);
});//event listener

server.listene(3000, 'localhost', function(){
    console.log('server started on port : 3000');
});