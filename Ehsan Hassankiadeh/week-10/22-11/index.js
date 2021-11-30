const express = require("express");
const ejs = require("ejs");
const server = express();
const axios = require("axios");
server.set("view-engine", ejs);

const PORT = 1337;

server.get("/", (req, res) => {
  //   console.log("get/");
  res.render("home.ejs");
});
server.get("/joke", (req, res) => {
  const name = req.query.name;
  axios(
    `https://api.icndb.com/jokes/random?firstName=${name}&lastName=${
      name + "JAJA"
    }`
  ).then((result) => {
    res.render("joke.ejs", { jokeItself: result.data.value.joke });
  });
});

server.listen(PORT, () => {
  console.log(`Server is now on http://localhost${PORT}`);
});
