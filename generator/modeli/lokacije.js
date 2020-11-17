var mongoose = require('mongoose');

var lokacijaSema = new mongoose.Schema({
    ime: String,
    mesto: String,
    cena: Number
  });
  
  var Lokacija = mongoose.model('Lokacija', lokacijaSema);
  
  // Eksportujemo model lokacije
  module.exports = Lokacija;
  