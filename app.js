// jshint esversion:6

const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});


app.listen(process.env.PORT || 3000, function() {
  console.log("Server is up and running!");
});
