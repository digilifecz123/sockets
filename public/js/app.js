var socket = io();

socket.on('connect', function () {
  console.log('yaaaa, connected to sockets')
});

socket.on('message', function (message) {
  console.log('new message: ');
  console.log(message.text);

  $('.messages').append('<p>' + message.text + '</p>')
});

// Handles submitting of new message
var $form = $('#message-form');

$form.on('submit', function(event){
  // this will disable refresh page
  event.preventDefault();

  var $message = $form.find('input[name=message]')
  socket.emit('message', {
    text: $message.val()
  });

  $message.val('');


});
