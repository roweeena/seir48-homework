const express = require('express');
const ejs = require('ejs');
const axios = require('axios');
const _ = require('underscore');

const server = express();
server.set('view-engine', ejs);
const PORT = 1337;

// Allow for
server.use(express.static(__dirname + '/public'));

server.get('/', (req, res) => {
  res.render('home.ejs');
});

server.get('/game', (req, res) => {
  res.render('game.ejs');
});

// Retrieves a clue, based on category id and dollar value
server.get('/clue/:category/:value', (req, res) => {
  axios('http://jservice.io/api/clues', {
    params: {
      category: req.params.category,
      value: req.params.value
    }
  }).then((response) => {
    // Returns a single random clue, from an array of clues that match the params
    const clue = _(response.data).sample();
    console.log(clue);
    res.render('clue.ejs', {
      category: clue.category.title,
      value: clue.value,
      question: clue.question,
      answer: clue.answer
    });
  }).catch((err) => {
    console.error(err);
    res.json(err);
  });
});

server.get('/answer', (req, res) => {
  res.render('answer.ejs', {
    category: req.query.category,
    value: req.query.value,
    question: req.query.question,
    answer: req.query.answer
  });
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));
