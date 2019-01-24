var amamam=1;
var express = require('express');
var request = require('request-promise');
var WebSocketServer = new require('ws');
var clients = {};
var app = express();
app.use(express.static('public'));
app.set('view engine', 'pug');
var BTC
var onl

app.get('/hyml', function (req, res) {
		var ip = req.connection.remoteAddress;
		res.render('index');
	})
var WebSocketServer = new require('ws');

// подключенные клиенты
var clients = {};
var online = [];
var line = [];
// WebSocket-сервер на порту 8081
var webSocketServer = new WebSocketServer.Server({
  port: 8081
});
webSocketServer.on('connection', function(ws) {
  var id = Math.random();
  clients[id] = ws;
  console.log("новое соединение " + id);
  online[id]=id
  var line = []
  for (var key in online) {
      line.push(online[key])
    }
	for (var key in clients) {
      clients[key].send(JSON.stringify({
        name: "Server",
        msg: "фанат артака "+id+", прибыл подкачаться, проходи протеины можешь взять за стойкой!" + "<br>",
        online: line.join("<br>")
      })
	  );
	}
  ws.on('message',function(message) {
    message=JSON.parse(message);
    online[id]=message.name
    var line=[]
    for (var key in online) {
      console.log(online[key])
      line.push(online[key])
    }
    console.log(line)
    for (var key in clients) {
      clients[key].send(JSON.stringify({
        name: message.name,
        msg: message.msg,
        online: line.join("<br>")
      })
     );
    }   
  });
  ws.on('close', function() {
    console.log('соединение закрыто ' + id);
    delete clients[id];
	var kk =online[id];
    delete online[id];
    var line=[]
    for (var key in online) {
      line.push(online[key])
    }
    for (var key in clients) {
      clients[key].send(JSON.stringify({
        name: "Server",
        msg: "<strong>"+kk + " , пошел спать"+ "<br>"+"<strong>",
        online: line.join("<br>")
      })
      )
    }
  });
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});