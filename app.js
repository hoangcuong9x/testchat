var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var routes = require('./routes/routes.js');
app.use(bodyParser.json());
app.use(cors());
//ket noi router
app.use(routes);

io.on('connection',function(socket){
    socket.on('data-message',function(msg){
        var data = {
            user: msg.user,
            message:msg.message
        }
        io.emit('send-message', data);
        socket.emit('server-clear-input');
    });
    socket.on('client-send-Username', function(data1){
        socket.Username = data1;
    });
    socket.on('toi-dang-go-chu', function(){
        var s = socket.Username + ' đang nhập...';
        io.sockets.emit('ai-do-dang-go-chu', s)
    });
    socket.on('toi-stop-go-chu', function(){
        io.sockets.emit('ai-do-stop-go-chu')
    });
});

http.listen(process.env.PORT || 8888, function(){
    console.log('listening on *:8888');
});