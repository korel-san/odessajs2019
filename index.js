const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', function (req, res) {
  fs.appendFileSync('logs/server.log', 'request: ' + JSON.stringify(req.query))
  res.send('Hello world');
});

app.listen(3000, function() {
  fs.writeFileSync('logs/server.log', 'server start');
})
