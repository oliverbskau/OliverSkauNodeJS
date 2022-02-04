const out = str => console.log(str);

// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 
out(letters[1])

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

const aFriend1 = {name: "aFriendlyName1"};
const aFriend2 = {name: "aFriendlyName2"};
const aFriend3 = {name: "aFriendlyName3"};
friends[0] = aFriend1;
friends[1] = aFriend2;
friends[2] = aFriend3;
out(friends);

// --------------------------------------
// Exercise 3 - Get the index of first occurrence of that value. 

const significantMathNumbers = [0, 2.718, 1729, 3.14159, 1729, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

let iNum = 0;
let myNumber = 1729;
for(let i = 0; i < significantMathNumbers.length; i++){
    if(significantMathNumbers[i] == myNumber){
        console.log(significantMathNumbers[i] + " occurs in index " + iNum);
    }
    iNum++;
}

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket
diet.splice(2,0, "hamburger", "soda", "pizza");

out(diet);

// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

diet.pop();

out(diet);


// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

diet2 = [].concat(diet);
out(diet2);

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b
function arrayItr(arr){
    for(let i = 1; i < arr.length; i+=2){
        out(arr[i])
    }
}
arrayItr(lettersExpanded);



// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

let indexNum = 0;
function arrayItr2(arr){
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 6 || numbers[i] < 0){
        out(numbers[i]);
    }else{
        discardedNumbers[indexNum] = numbers[i];
        indexNum++;
    }
}
}
arrayItr2(numbers);
out(discardedNumbers);


// --------------------------------------