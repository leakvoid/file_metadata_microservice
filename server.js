/* initialization */
var express = require('express');
var multer = require('multer');

var upload = multer({ dest: 'uploads/' });
var app = express();

var port = process.env.PORT || 3000;

/* routing */
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/static_pages/home.html');
});

app.post('/upload_file', upload.single('uploaded_file'), function(req, res) {
    console.log(JSON.stringify(req.file));
    res.send({'file_size': req.file.size});
});

/* misc */
app.get('/favicon.ico', function(req, res) {
    console.log('piss off, favicon!');
    res.end('piss off, favicon!');
});

app.use(function(req, res) {
    console.log('Requested page not found: 404');
    res.end('Requested page not found: 404');
});

app.listen(port, function() {
    console.log('Server running at port ' + port);
});
