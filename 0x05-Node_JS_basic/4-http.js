#!/usr/bin/env node
const app = require('http');

// create a server object:
app.createServer(function (req, res) {
  res.write('Hello Holberton School!'); // write a response to the client
  res.end(); // end the response
}).listen(1245); // the server object listens on port 1245

module.exports = app;
