// Require and instantiate Express
const express = require('express');
const app = express();

// localhost:3000 Root route responds with plain text
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// localhost:3000/stephen responds with JSON object
app.get('/:name', function(req, res) {
  // extract name from  url parameter
  const name = req.params.name;
  res.json({
    name: name,
    success: true,
    date: new Date().toDateString()
  });
});

// Must give it a port number, usually 3000, 3030, 8000, or 8080
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
