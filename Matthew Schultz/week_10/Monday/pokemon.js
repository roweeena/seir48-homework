const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const Pokemon = require('pokemon.js');

const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs);

Pokemon.setLanguage('english');

const PORT = 1337;

server.get('/', (req, res) => {
  res.render('home.ejs');
})

server.get('/pokemon', (req, res) => {
  Pokemon.getPokemon(req.query.name).then((result) => {
    res.render('pokemon.ejs', {name: req.query.name, pokemon: result});
  });
});

server.listen(PORT, () => {
  console.log(`Server is kind of paying attention to ${PORT}`);
});
