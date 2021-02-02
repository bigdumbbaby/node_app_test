const express = require("express")
const fsHandler = require("fs").promises

const app = express()

app.get('/', ( request, response) => {
  response.send("WASSSSUUUUUUUUPPPP!")
});

app.get('/characters', ( request, response) => {
  fsHandler
    .readFile(__dirname + "/character.json", {encoding: "utf-8"})
      .then((response) => JSON.parse(response))
      .then((characters) => console.log)
})

app.listen("9000")