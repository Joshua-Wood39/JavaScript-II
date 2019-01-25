// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const youCantTouchThis = function (x) {
    return function (y) {
      return x + y;
    }
}

const testName = youCantTouchThis("Joshua")(" Wood");
console.log(testName);




// ==== Challenge 2: Create a counter function ====
let elNumber = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
    return function upCount () {
        return ++elNumber;
    }
};

counter() ();
console.log(elNumber);
counter() ();
console.log(elNumber);



// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2




/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let privateCounter = 0;
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  
  
  return {
      'increment': function() {++privateCounter;},
      'decrement': function() {--privateCounter;},

  };
};

console.log(privateCounter);
counterFactory().increment();
console.log(privateCounter);
counterFactory().increment();
console.log(privateCounter);
counterFactory().decrement();
console.log(privateCounter);
counterFactory().decrement();
console.log(privateCounter);

