var mongoose = require('mongoose');

// KORISNIK
// ime -> string
// prezime -> string
// godine -> broj

var korisnikSema = new mongoose.Schema({
  ime: String,
  prezime: String,
  godine: Number
});

var Korisnik = mongoose.model('Korisnik', korisnikSema);

// Eksportujemo model korisnika
module.exports = Korisnik;
