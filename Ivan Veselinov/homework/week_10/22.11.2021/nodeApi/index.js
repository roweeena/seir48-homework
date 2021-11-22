const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');
const si = require('systeminformation');


const server = express();

server.set('view-engine',ejs);

const PORT = 1337;

server.get('/', (req, res) => {
  res.render('home.ejs');
});


server.get('/spec', (req, res) => {
  res.render('specs.ejs')
});

server.get('/result', (req, res) => {
  si.cpu()
    .then(data => {
        res.render('result.ejs', {manufacturer: data.manufacturer, brand: data.brand, speed: data.speed, cores: data.cores});
    })
    .catch(error => console.error(error));

})




server.listen(PORT, () => console.log(`Now serving on http://localhost:${PORT}`));
