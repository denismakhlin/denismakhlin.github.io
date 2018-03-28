var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
   res.sendFile('public/problem_1.html', { root: __dirname })
})

// Handle a new connection
io.on('connection', function(socket) {

    // When someone sends a message, send it out to everyone
    socket.on('coordinates', function(msg) {
        io.emit('coordinates', msg);
    });

     socket.on('bearCoordinates', function(msg) {
        io.emit('bearCoordinates', msg);
    });
    
    socket.on('paintCoordinates', function(msg) {
        io.emit('paintCoordinates', msg);
    });
});

http.listen(3000, function() {
    console.log('Listening on port 3000');
});
