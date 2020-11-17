const express = require('express');
const router = express.Router();

const Lokacija = require('../modeli/lokacije');

// ECMASCRIPT 6 , let i const, arrow funkcije, async/await

router.get('/', async (req, res, next) => {
  const lokacije = await Lokacija.find();

  res.send(lokacije);
});

// ruta za dodavanje lokacije
router.post('/dodaj', async (req, res) => {
    const { ime, mesto, cena } = req.body; // === ime = req.body.ime, mesto = req.body.mesto ....
    
    // const -> slicno kao var, ima drugaciji scoping, 
    // ne moze da se menja vrednost na koju pokazuje
    // const boja = 'crvena'; 
    // boja = 'zelena' -> error
    // const korisnik = {ime: 'Test'};
    // korisnik.ime = 'Drugi test'

    const novaLokacija = new Lokacija({
        ime, mesto, cena
    })

    const sacuvanaLokacija = await novaLokacija.save();

    res.send(sacuvanaLokacija);
    // {
    //     ime: ime,
    //     mesto: mesto,
    //     cena: cena
    // }
    
});

module.exports = router;
