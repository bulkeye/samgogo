let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let lessMiddleware = require('less-middleware');

let index = require('./routes/index/index');
let login = require('./routes/login/userLogin');
let login_submitForm = require('./routes/login/userLogin_submitForm');

let app = express();


// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//app.locals.basedir = app.get('views');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/userLogin$', login);
app.use('/loginForm$', login_submitForm);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('base/error',{error:res.locals.message});
});


module.exports = app;
