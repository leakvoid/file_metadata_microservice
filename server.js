/* initialization */
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

/* routing */
app.get('/', function(req, res) {
    res.send('file metadata test');
});

/* misc */
app.listen(port, function() {
    console.log('Server running at port ' + port);
});
