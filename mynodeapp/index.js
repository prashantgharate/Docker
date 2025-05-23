var express = require('express');
var app = express();

// Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
  res.send('Hi I am Prashant and you');
});

// Listen on port 3000 or environment-defined port
app.listen(process.env.PORT || 3000);

module.exports = app;

