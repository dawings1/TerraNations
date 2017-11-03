//Terra Nations
//By  TCB Softworks. http://tcbsoftworks.com
//Development started 11/2/2017, Last edited 11/2/2017

//Import Libraries
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
  console.log('Someone connected to us');
});

server.listen(1337, function(){
  console.log('listening on *:1337  ');
});