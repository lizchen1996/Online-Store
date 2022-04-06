// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const _ = require("lodash");
const app = express();
app.set('view engine', 'ejs');

const http = require("http");
const querystr = require("querystring");
const mysql = require("mysql");
const port = (process.env.PORT || 3000);
// const dBCon = mysql.createConnection({
//   host: "localhost",
//   user: "yourusername",
//   password: "yourpassword"
// });
//
// dBCon.connect(function(err) {
//   if (err) throw err;
// });

const webServer = http.createServer((req, res) => {

  res.write("<h1>Hello World!</h1>")
  res.end();

  {
    if (!resMsg.headers || resMsg.headers === null) {
      resMsg.headers = {};
    }
    if (!resMsg.headers["Content-Type"]) {
      resMsg.headers["Content-Type"] = "application/json";
    }

    response.writeHead(resMsg.code, resMsg.hdrs),
    console.log(resMsg.hdrs);
    response.end(resMsg.body);
  }

});



webServer.listen(port, function() {
  console.log("Server is up and running!");
});

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));
// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/index.html");
// });
//
//
// app.listen(port, function() {
//   console.log("Server is up and running!");
// });
