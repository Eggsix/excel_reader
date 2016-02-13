var express = require('express');
var bodyParser = require('body-parser');
var app = express();





// if using body-parser
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
// if mongoose, require mongoose
require('./server/config/mongoose.js');

//routes
require('./server/config/routes.js')(app);

app.listen(8000, function () {
	console.log('listening on port 8000');
})