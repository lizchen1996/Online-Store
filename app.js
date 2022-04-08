// jshint esversion:6

const fs = require("fs");
const _ = require("lodash");
const http = require("http");
const querystr = require("querystring");
const port = (process.env.PORT || 3000);
const router = require('./router/index');

const webServer = http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'application/json;charset=UTF-8'});
  let resultData = router(req, res);
  if(resultData){
    res.end(JSON.stringify(resultData));
  }
});

webServer.listen(port, function() {
  console.log("Server is up and running!");
});
