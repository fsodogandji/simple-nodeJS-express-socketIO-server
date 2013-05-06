var io = require('socket.io-client');
var assert = require('assert')
var port = 8081;
var serverUrl = 'http://localhost:8081/test';
var socket = io.connect(serverUrl);

// send a message to the server
socket.emit('PING', { message: 'ping from nodejs socketIO'  });


socket.on('PONG', function(data) {
        //print the data send by the server
         console.log("data: ",data.message);
        //                           document.getElementById('out').innerHTML = data_socket_IO.message ;
        //
        assert.equal(data.message,"ping from nodejs socketIO from server")
	process.exit(0);
                                                });
