/* dependancies verklaren en ophalen */
var express = require('express');
var app     = express();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);
var $       = require('jquery');
var bodyParser  = require('body-parser');
var port        = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static('_includes'));
app.use('_includes', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

http.listen(port, function(){
  console.log('[ HELLO YES ]');
  console.log('   MEETMAATI active on PORT ::'+ port);
  console.log('   Enjoy your stay.');
});

/* pathing / routing */
app.get('/', function(req, res){
  res.sendFile('index.html', {"root": __dirname+'/public/'});
});
