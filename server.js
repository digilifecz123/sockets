var PORT = process.env.PORT || 3000;
var moment = require('moment');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
  console.log('user connected via socket.io');
 
 socket.on('message', function(message){
   console.log('message recieved: ' + message.text);
   message.timeStamp = moment().valueOf();
   // socket.broadcast.emit send to everyone except the sender
    // socket.emit we have to use io.emit
   io.emit('message', message);
 })

 // this prints out message to console
  socket.emit('message', {
    name: 'System', 
    text: 'Welcome to TuanoChatt',
      timeStamp: moment().valueOf()
  });
});

http.listen(PORT, function () {
  console.log('server started: ' + PORT);
})