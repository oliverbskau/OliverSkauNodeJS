const express = require("express");
const app = express();

//Premade testdata
const arrayOfBeers = [
  { id: 1, beerName: "Tuborg" },
  { id: 2, beerName: "Carlsberg" },
  { id: 3, beerName: "Royal" },
];
console.log(arrayOfBeers);

//starting application
app.use(express.json());

//Getting list of beers within array
//GET method
app.get("/beers", (req, res) => {
  res.send(arrayOfBeers);
});

//Getting a beer from the array by the beer's id
//GET method
app.get("/beers/:id", (req, res) => {
  const requestedBeerId = parseInt(req.params.id);
  let requestedBeer;
  arrayOfBeers.forEach((beer) => {
    if (beer.id === requestedBeerId) {
      requestedBeer = beer;
    }
  });
  if (requestedBeer !== null) {
    res.send(requestedBeer);
  } else {
    res.send("No beer with that id");
  }
});

//creates a new beer. Since i don't have input fields in a form,
//it just creates this one beer every time this endpoint is triggered
//POST method
app.post("/beers", (req, res) => {
  id = 4;
  beerName = "IPA";
  arrayOfBeers.push({ id: id, beerName: beerName });
  res.send(arrayOfBeers);
});

//Updates an already existing beer, by changing it's values. Found by its ID
//PUT method
app.put("/beers/:id", (req, res) => {
  const requestedBeerId = parseInt(req.params.id);
  const body = req.body;

  arrayOfBeersIndex = arrayOfBeers.findIndex(
    (beer) => beer.id === requestedBeerId
  );

  if (arrayOfBeersIndex !== -1) {
    arrayOfBeers[arrayOfBeersIndex] = {
      id: requestedBeerId,
      beerName: body.beerName,
    };
    res.send(arrayOfBeers[arrayOfBeersIndex]);
  } else {
    res.send("No beer with that id");
  }
});


//Deletes a beer by its id
//DELETE method
app.delete("/beers/:id", (req, res) => {
  const requestedBeerId = parseInt(req.params.id);
  arrayOfBeers.forEach((beer) => {
    if (beer.id === requestedBeerId) {
      arrayOfBeers.splice(arrayOfBeers.indexOf(beer), 1);
    }
  });
  res.send("Beer was deleted");
});



app.listen(8080);
