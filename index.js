var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express');


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use('/public', express.static('public'));

io.on('connection', function(socket){
	 // console.log('connection');
	  
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  
    socket.on('READ_MYKAD', function (from, msg) {
    console.log('SERVER_ONLY msg', from, ' saying ', msg);
	socket.emit('MYKAD_PAGE', 'yada ya');
  });
  
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
