
//*****************************************************************************************************//

Dom panipulation 
html se element select karna
text badalna
html badalna
css badalna
attribute 
event listener






🔹 What is a First-Class Function in JavaScript?

First-class functions mean:

In JavaScript, functions are treated like values — just like numbers, strings, or objects.

This means you can:

✅ Assign functions to variables
✅ Pass them as arguments to other functions
✅ Return them from other functions
✅ Store them in arrays, objects, etc.



✅ Examples
1. Assigning function to a variable

const greet = function () {
  console.log("Hello!");
};

greet(); // ✅ Works like a normal function


2. Passing function as an argument

function sayHi() {
  console.log("Hi!");
}

function callFunction(fn) {
  fn(); // calling the function passed as argument
}

callFunction(sayHi); // ✅ Output: Hi!


3. Returning a function from a function

function outer() {
  return function () {
    console.log("I am inner function");
  };
}

const inner = outer(); // outer() returns a function
inner(); // ✅ Output: I am inner function



***********************************************************************

🔁 What is a Higher-Order Function in JavaScript?
A Higher-Order Function is a function that:

1. Takes another function as an argument, OR
2. Returns a function as its result.

function HOF(callback){
    callback(); // taking another function as input
}

OR

function HOF(){
    return function(){
        // returning a function 
    }
}