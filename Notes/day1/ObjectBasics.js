// --------------------------------------
// Objects
// --------------------------------------
const out = str => console.log(str);

// Exercise 1 - Retrieve value from object by key

const alienMessage = {
	message: "Hello, earthling! I bring peace."
};

// Log the message 

out(alienMessage.message);

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const theMeObj = {
    name: "Oliver",
    age: 23
};

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};
stackOverflow[1] = theMeObj;
out(stackOverflow[1]);
//not sure if this was the meaning of this excersise 

// make a rule called isAllowed and let the value be true

 isAllowed = true;
 if(isAllowed == true){
     out("i don't break the rule");
 }

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {
	description: "The best song in the world."
}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description;

const propertyAbout = {
    about: "Just a tribute"
};

thisSong[1] = propertyAbout;
out(thisSong)

// --------------------------------------