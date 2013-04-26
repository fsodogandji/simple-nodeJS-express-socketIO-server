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
server.listen(port);
