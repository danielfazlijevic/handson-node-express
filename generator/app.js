var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRute = require('./routes/test');
var korisniciRute = require('./routes/korisnici');
const lokacijeRute = require('./routes/lokacije.js');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRute);
app.use('/korisnici', korisniciRute);
app.use('/lokacije', lokacijeRute);

// /korisnici => vrati sve korisnike iz baze

module.exports = app;
