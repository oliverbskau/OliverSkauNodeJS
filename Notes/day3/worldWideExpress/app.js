const express = require("express");
const app = express();


const word = "hello world";
app.get("/", (req,res) =>{
    res.send(`<h1>Welcome to my website</h1><h2>Time: ${new Date().getDate()} <h2>`)
});

app.get("/bored", (req,res) => {
res.sendFile(__dirname + "/public/activities.html")
});


const PORT = 8080;
app.listen(8080, (error) => {
    console.log("Server is running on: ", PORT)
})