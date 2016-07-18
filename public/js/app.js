var name = getQueryVariable('name') || 'Annonymous';
var room = getQueryVariable('room');
var socket = io();

console.log(name + ' wants to join ' + room)

socket.on('connect', function () {
  console.log('yaaaa, connected to sockets')
});

socket.on('message', function (message) {
  var momentTimeStamp = moment.utc(message.momentTimeStamp);
  var $message =  $('.messages')
  console.log('new message: ');
  console.log(message.text);

$message.append('<p><strong>' + message.name + ' ' + momentTimeStamp.local().format('h:mm')  + '<strong></p>')
$message.append('<p>' + message.text  + '</p>')
});

// Handles submitting of new message
var $form = $('#message-form');

$form.on('submit', function(event){
  // this will disable refresh page
  event.preventDefault();

  var $message = $form.find('input[name=message]')
  socket.emit('message', {
    name: name,
    text: $message.val()
  });

  $message.val('');


});
