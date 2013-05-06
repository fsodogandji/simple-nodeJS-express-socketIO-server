var express = require("express"),
    app     = express(),
    server = require('http').createServer(app)
    port    = 8081;
    
//app.get("/", function(req, res) {
app.get('/', function handler(req, res) {

  //res.redirect("/index.html");
  res.sendfile(__dirname + '/index.html');



});

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use("/css",express.static(__dirname + '/css'));
  app.use(express.errorHandler({
     dumpExceptions: true, 
    showStack: true
  }));
  app.use(app.router);
});

var   io = require('socket.io').listen(server);
var nameservice = io.of('/test');
nameservice.on('connection', function(socket) {
  // Un client se connecte
    console.log('Connexion');
    socket.on('PING', function(data) {
       // Message send by  client
      // we resend to all the connected clients  
              console.log( data.message + " from "+ socket.id  )
              socket.broadcast.emit('PONG',  {'message': data.message + " from server"}  );
              socket.emit('PONG', { 'message': data.message+ " from server" });
  
                            });
                            });
  //

 
server.listen(port);
