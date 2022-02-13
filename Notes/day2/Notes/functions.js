function add(x, y) {
  return x + y;
}

//Anonymous function after equal sign
const addInVariable = function add(x, y) {
  return x + y;
};

//Arrow function as a one-liner
const addArrowFunction = (x, y) => x + y;

function doActionWithSomeone(anyFunctionReference, name) {
  anyFunctionReference(name);
}
const running = (name) => console.log(`${name} is running`);

const passing = (name) => console.log(`${name} is passing an object`);

const fishing = (name) => console.log(`${name} is fishing for magikarp`);

doActionWithSomeone(running, "Oliver");
doActionWithSomeone(passing, "Rasmus");
doActionWithSomeone(fishing, "Jonas");

doActionWithSomeone(
  (name) => (console.log(`${name} is fishing for magikarp`), "Ines")
);

console.log('I  "like"  homeworks');
