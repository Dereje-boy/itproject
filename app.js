var express = require('express');

//importing templeting engine handlebars
const { engine } = require('express-handlebars');

//importing middlewares
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//importing routes
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

module.exports = app;
