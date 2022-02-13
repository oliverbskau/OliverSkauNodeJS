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

app.post("/mirror", (req, res) => {
    res.send(req.body);
});



app.listen(8080);
