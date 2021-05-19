var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

//Create express object
var app = express();

//==============================================================================

//Require `config` and `db` files
require('./environment_config');

//===============================================================================

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.disable('x-powered-by');

//===============================================================================

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//===============================================================================

module.exports = app;