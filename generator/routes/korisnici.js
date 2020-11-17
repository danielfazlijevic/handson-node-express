var express = require('express');
var router = express.Router();

var baza = require('../baza');
var Korisnik = require('../modeli/korisnik');


// VRATI SVE KORISNIKE
router.get('/', function(req, res, next) {
  Korisnik.find(function (greska, korisnici){
      // ukoliko dodje do greske
    if(greska) res.send('Doslo je do greske');
    else {
        res.send(korisnici);    
    }
  });
});

router.post('/dodaj', function(req, res) {
    var ime = req.body.ime;
    var prezime = req.body.prezime;
    var godine = req.body.godine;

    // var {ime, prezime, godine } = req.body;

    var noviKorisnik = new Korisnik({
        ime: ime,
        prezime: prezime,
        godine: godine
    }); 

    noviKorisnik.save(function (greska, podaci){
        if(greska) res.send('doslo je do greske');
        else {
            res.send(podaci);
        }
    });
});

router.delete('/obrisi/:id', async (req, res) => {
    // obrisi korisnika sa zadatim ID-jem
    var idKorisnika = req.params.id;
    console.log('Brisem korisnika sa id-jem', idKorisnika);
    const obrisaniKorisnik = await Korisnik.findByIdAndDelete(idKorisnika);
    console.log(obrisaniKorisnik);
    res.send(obrisaniKorisnik);
});


module.exports = router;
