const express = require("express");
const ejs = require("ejs");
const weather = require('openweather-apis');
const axios = require("axios");

const server = express();
server.set("view-engine", ejs);
const PORT = 1337;
const apiKey = "c7a1e27e540b032aa648b4915be385aa";

server.get("/", (req, res) => {
  res.render("home.ejs");
});

// server.get("/weather", (req, res) => {
//   axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&units=metric&appid=${apiKey}`).then((response) => {
//     console.log(response.data);
//     res.render("weather.ejs", {
//       city: req.query.city,
//       weather: response.data.weather[0].description,
//       temp: response.data.main.temp,
//       humidity: response.data.main.humidity,
//     })
//   })
// });

server.get("/weather", (req, res) => {
  weather.setCity(req.query.city);
  weather.setUnits('metric');
  weather.setAPPID(apiKey);

  weather.getSmartJSON((err, smart) => {
    if (err){
      console.log(err);
    } else {
      console.log(smart);
      res.render("weather.ejs", {
        city: req.query.city,
        weather: smart.description,
        temp: smart.temp,
        humidity: smart.humidity,
      });
    }
  });
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));
