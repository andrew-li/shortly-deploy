var app = require('./server-config.js');

var port = process.env.PORT || 4569;

app.listen(port);

console.log('Server now listening on port ' + port);
