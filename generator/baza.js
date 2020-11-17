var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/handson', {
    useNewUrlParser: true
});

var baza = mongoose.connection;

baza.once('open', function(){
    console.log('Konektovan na bazu');
});

// ovaj fajl eksportuje varijablu baza
module.exports = baza;