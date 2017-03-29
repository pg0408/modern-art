// server.js

// DEPENDENCIES AND SETUP
// ===============================================

var express = require('express'),
  app = express(),
  port = Number(process.env.PORT || 8080);

// ROUTES
// ===============================================

// Define the home page 
app.use(express.static('network'))

// START THE SERVER
// ===============================================

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
