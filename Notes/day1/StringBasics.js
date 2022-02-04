// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

const numberOneTF = parseFloat(numberOne);
const numberTwoTF = parseFloat(numberTwo);

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

let result1 = numberOneTF + numberTwoTF;
const out = str => console.log(str);
out(result1);

// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

let result2 = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
out(result2.toFixed(2));

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const avgNumber = ((one+two+three)/3).toFixed(5);
out(avgNumber);

// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

const specifikLetter = letters[2];
out(specifikLetter);

// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

out(fact.replace("j","J")); //changes all j's

// --------------------------------------