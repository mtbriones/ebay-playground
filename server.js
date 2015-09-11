// Base library import
var express = require('express'),
    bodyParser = require('body-parser'),
    compression = require('compression'),
    app = express();

// Custom class library import
var offerSvc = require('./server/offers');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

app.use('/', express.static(__dirname + '/www'));

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});