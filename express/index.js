const { response } = require('express');
const express = require('express'); // kreiramo varijablu express 
const app = express();

// GET, POST, DELETE, PATCH, PUT, OPTIONS
 
app.get('/', function (request, response, next) {
  response.send('Hello World');
});

app.get('/pozdrav', function(zahtev, odgovor){
    odgovor.send('pozdrav');
});

app.get('/pozdrav/', function(zahtev, odgovor) {
    odgovor.send('pozdrav 2');
});
 
app.listen(3000);