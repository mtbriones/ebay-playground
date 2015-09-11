// Base library import
var express = require('express'),
    app = express();

app.set('port', process.env.PORT || 3000);

app.use('/', express.static(__dirname + '/www'));

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});