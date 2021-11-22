const express = require("express");
const ejs = require("ejs");
const OpenWeatherAPI = require("openweather-api-node");

require("dotenv").config();

const server = express();
server.set("view-engine", ejs);
const PORT = 1337;
const apiKey = process.env.OPENWEATHER_API_KEY;

let weather = new OpenWeatherAPI();

server.get("/", (req, res) => {
  res.render("weather.ejs");
});

server.get("/info", (req, res) => {
  weather.setKey(apiKey);
  weather.getCurrent({ locationName: req.query.city, units: "metric" }).then((result) => {
    // console.log(result);
    res.render("info.ejs", {
      city: req.query.city,
      result: Number(result.weather.temp.cur).toFixed(1),
      icon: result.weather.icon.url,
      description: result.weather.description,
    });
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
