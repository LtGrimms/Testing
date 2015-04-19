var http = require('http');

this.server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, world!\n');
}).listen(8000);

//exports.listen = function () {
//  this.server.listen.apply(this.server, arguments);
//};

//exports.close = function (callback) {
//  this.server.close(callback);
//};
