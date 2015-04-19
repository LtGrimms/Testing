//var http = require('http');

//this.server = http.createServer(function(req, res) {
//  res.writeHead(200, {'Content-Type': 'text/plain'});
//  res.end('Hello, world!\n');
//}).listen(8000);


var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello, world!\n');
});

app.listen(8000);
