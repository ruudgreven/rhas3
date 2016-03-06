//Load express
var express = require('express');
var bodyParser = require('body-parser');

//Initialize express
var app = express();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});
app.use( bodyParser.json({type: '*/*'}) );


//Load modules
var System = require('./modules/System');

//Register modules
app.use('/system', new System().registerApi());


function errorHandler(err, req, res, next) {
    res.status(500);
    console.log("Error: " + err);

    res.json({
        error: err.toString(),
        errordetails: err
    });
}
app.use(errorHandler);

//Start app
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});