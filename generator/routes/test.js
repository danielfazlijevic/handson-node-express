var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('test ruta');
});

router.post('/', function(req, res){
    res.send('Poslao si POST');
});
// posalji/test
// => "Poslao si 'test'"

// path varijable
// GET request koji pocinje sa /posalji/***
router.get('/posalji/:vrednost', function(req, res){
    console.log(req);
    var vrednost = req.params.vrednost;
    var povratniTekst = 'Poslao si ' + vrednost;

    res.send(povratniTekst);
});

// /posalji/123/test 
// => Poslao si 123 i test
router.post('/posalji/:vrednost/:naziv', function (req, res){
    var vrednost = req.params.vrednost;
    var naziv = req.params.naziv;
    // var povratniTekst = 'Poslao si ' + vrednost + ' ' + naziv;
    res.send('Poslao si ' + vrednost + ' i ' + naziv);
});


// Body varijable
router.post('/bodyvarijable', function (req, res){
    console.log(req.body);
    res.send(req.body);
});


// POST metodom
// { ime, prezime} => 'Korisnik IME PREZIME je uspesno dodat'
router.post('/korisnik', function(req, res){
    var ime = req.body.ime; // req.body['ime']; req['body']['ime];
    var prezime = req.body.prezime;

    res.send('Korisnik ' + ime + ' ' + prezime + ' je uspesno dodat.');
});

router.post('/korisnik/:lokacija', function(req,res){
    var ime = req.body.ime; // req.body['ime']; req['body']['ime];
    var prezime = req.body.prezime;
    var odabranaLokacija = req.params.lokacija;
    
    var povratniTekst = 'Korisnik ' + ime + ' ' + prezime + ' je uspesno dodat u lokaciju ' + odabranaLokacija;

    res.send(povratniTekst);
});



// JSON - javascript object notation
// 


// REST API
// REST API za sajt o putovanjima 
// Lokacije, Korisnike 
// MongoDB baza
// Mongoose paket


module.exports = router;
