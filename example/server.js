var path = require('path'),
	app = require('express')(),
	fs = require('fs'),
	browserify = require('browserify-middleware');

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/index.js', browserify(path.join(__dirname, 'index.js')));

app.get('/dino', function(req, res) {
	fs.readFile(path.join(__dirname, 'dino.jpg'), function(err, content) {
		if (err) {
			return done(err);
		}
		res.status(200).send(content);
	});
});

app.listen(8080, function() {
	console.log('Server listening on http://localhost:8080');
});
