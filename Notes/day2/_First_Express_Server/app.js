//import express
const express = require("express");
const app = express();
//Alternate way of doing it, with a one-liner
//const app = require("express")();

app.use(express.json());

//endpoint      callback function
//client-request and server-response
app.get("/", (req, res) => {
  //res.send({ message: "Hello World!" });
  res.send("Hello World!")
});

// url kangaroofacts?cankick=true
app.get("/kangaroofacts", (req, res) => {
  res.send(req.query);
});


app.get("/clientgreeting/:name", (req, res) => {
  res.send({ greeting: `Hello there, ${req.params.name}.` });
});



app.post("/mirror", (req, res) => {
    res.send(req.body);
});



app.listen(8080);
