# Js-Practice-Like-Hell

# ✅ What is JavaScript & How It Works

## 🧠 1. What is JavaScript?
JavaScript is a high-level, interpreted scripting language used to make web pages interactive. It runs in the browser and can also be used on the server (with Node.js).

## 🔹 JS is used to:
1. Create interactive UIs (e.g., modals, sliders)
2. Validate form inputs
3. Fetch data from APIs (AJAX/fetch)
4. Store data in localStorage
5. Control DOM elements


## ⚙️ 2. How JavaScript Runs in the Browser

### 🧩 JS Engine Workflow:
Parsing: Code is parsed to AST (Abstract Syntax Tree)
Compilation: Modern engines like V8 just-in-time compile the code
Execution: Executes optimized machine code

## 🚀 Popular JS Engines:
|Browser	| JS Engine  |        
|-----------|------------|
|Chrome     | V8         |
|Firefox    |SpiderMonkey|
|Safari    |JavaScriptCore| 
|Edge-Chakra |(now uses V8)|


## 🧵 3. JS is Single-threaded & Non-blocking

- Single-threaded: Runs one task at a time.
- Non-blocking: Uses the event loop to handle tasks like fetching data asynchronously.

### 📌 Event Loop ensures JS handles multiple operations efficiently without blocking the UI.



## ❓ Interview Questions

### 🔸 Q1: What is the difference between JavaScript and ECMAScript?
Answer: ECMAScript is the specification standard; JavaScript is the actual implementation used in browsers and includes additional features like DOM APIs.

### 🔸 Q2: How is JavaScript single-threaded but asynchronous?
Answer: JS uses a single main thread to run code but offloads tasks like timers, API calls to the Web APIs. When they finish, they are added to the callback queue and executed via the event loop.

### 🔸 Q3: What is the role of the JavaScript Engine?
Answer: The JS engine parses, compiles (JIT), and executes code. It manages memory and executes JavaScript instructions efficiently.

## 🧠 Flashcards (Revise Daily)
> JS Engin - Converts JS code to machine code, Single-threaded	- One instruction at a time, Asynchronous - Handles tasks without waiting, DOM	Document - Object Model,Event Loop - Manages async operations

---


# ✅ Variables, Data Types & Type Conversion

## 📍 1. Variables in JavaScript
### Variables are containers for storing data.
✅ Ways to Declare Variables:
<pre>
 var name = "Shubham"; // Function-scoped
 let age = 22;         // Block-scoped
 const PI = 3.14;      // Block-scoped, cannot be reassigned
</pre>
## 🧃 2. Rules for Naming Variables
1. Can contain letters, digits, underscores, $
2. Cannot start with a number
3. Case-sensitive (name and Name are different)
4. No JS reserved words like let, if, class

## 🔍 3. JavaScript Data Types
### 🔹 Primitive Types (immutable)

<pre>
 String	"hello"
 Number	123, 3.14
 Boolean	true, false
 Null	null
 Undefined	undefined
 Symbol	Symbol('id')
 BigInt	12345678901234567890n

</pre>
### 🔸 Non-Primitive (Reference) Types
<pre>
 Objects: { name: "Shubham" }
 Arrays: [1, 2, 3]
 Functions: function() {}

</pre>

## 📥 4. typeof Operator
<pre>
 console.log(typeof "Hello"); // string
 console.log(typeof 42);      // number
 console.log(typeof null);    // 🔥 "object" (quirk in JS)

</pre>

## 🔄 5. Type Conversion
### ✅ Implicit Type Coercion
#### JS automatically converts types in some expressions.

<pre>
 console.log("5" + 1);     // "51" (number → string)
 console.log("5" - 1);     // 4    (string → number)
 console.log(true + 1);    // 2    (true → 1)

</pre>
### 🧪 Explicit Type Conversion
## Use functions to convert manually:

1. Number("123");      // 123
2. String(456);        // "456"
3. Boolean(0);         // false
4. parseInt("42px");   // 44

# 🧠 Interview Questions
## 🔸 Q1: What’s the difference between let, const, and var?
Answer: 
1. var: function-scoped, hoisted, can be redeclared.
2. let: block-scoped, not hoisted to initialization.
3. const: block-scoped, can't be reassigned.

## 🔸 Q2: What is the difference between undefined and null?
1. undefined: Default value for unassigned variables, Set by JavaScript	I
2. null: Intentional absence of value, Set by developer

## 🔸 Q3: What is type coercion?
Answer: Automatic or implicit conversion of values from one data type to another.
---

# Operators & Control Flow
## 🔢 JavaScript Operators
### 1. Arithmetic Operators:
` +  -  *  /  %  **  ++  -- `

### 2. Comparison Operators:
<pre>
  ==      // Equal (loose, type-converting)
  ===     // Strict equal (type + value)
  !=, !== // Not equal
  >, <, >=, <=

</pre>
### 3. Logical Operators:

 <pre>
  &&  // AND
  ||  // OR
  !   // NOT
 </pre>

### 4. Assignment Operators:

`  =, +=, -=, *=, /=, %= `

### Examples:

<pre>
let a = 10, b = "10"

console.log(a == b);   // true (type conversion)
console.log(a === b);  // false (strict)
console.log(!true);    // false
console.log(true && false); // false

</pre>

## 🔁 Conditional Statements
###  if, else if, else

<pre>
let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

</pre>

### ✅ switch Statement
<pre>
let fruit = "apple"

switch(fruit){
    case "apple":
      console.log("red fruit");
      break;
    case "banana":
      console.log("yellow fruit")
      break;
    default:
      console.log("unknown fruit")
}
</pre>
---

#  ** JavaScript Functions (Normal, Arrow, Default, Rest, Callback) **

## 📌** 1. What is a Function? **
A function is a reusable block of code that performs a specific task.

<pre>
function greet() {
  console.log("Hello!");
}
greet(); // Hello!

</pre>

## ✍️** 2. Function Types **
### ✅ a. Function Declaration
<pre>
function add(a, b) {
  return a + b;
}
</pre>
>✅ Hoisted (can be called before declaration)

### ✅ b. Function Expression
<pre>
const subtract = function(a, b) {
  return a - b;
};
</pre>
>🚫 Not hoisted

### ✅ c. Arrow Functions (ES6+)
<pre>
const multiply = (a, b) => a * b;
const greet = () => console.log("Hi!");
</pre>
> 💡 Shorter syntax, but: No own this, Cannot be used as constructors

## ⚙️ 3. Default Parameters
<pre>
function greet(name = "Guest") {
  console.log("Hello", name);
}
greet();        // Hello Guest
greet("Shubham");// Hello Shubham

</pre>

## 🔢 4. Rest Parameters (...args)
Use to accept multiple arguments as an array:
<pre>
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num);
}
console.log(sum(1, 2, 3, 4)); // 10

</pre>

## 🔁 5. Callback Functions
A callback is a function passed as an argument to another function.

<pre>
function greetUser(name, callback) {
  console.log("Hello", name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greetUser("Shubham", sayBye);
// Hello Shubham
// Bye!

</pre>
> Used in: - Events, - setTimeout, - APIs, - Functional programming

# 🧠 Interview Questions

## 🔸 Q1: What is the difference between function declaration and function expression?

### Answer: 
- Declaration is hoisted; expression is not.
- Declaration uses function, expression can use const.

## 🔸 Q2: Why arrow functions can’t use this?
### Answer:
- Arrow functions do not have their own this; they inherit  this from the parent scope.

## 🔸 Q3: What are default and rest parameters?
### Answer:
- Default: Assigns a value if none provided
- Rest: Packs multiple arguments into a single array

---

# ✅ Scope, Hoisting & Closures
## 🔒 1. Scope in JavaScript
Scope determines where a variable can be accessed in code.
### ✅ Types of Scope:

| Type            |      Example                           |
| ---------------------- | --------------------------------- |
| Global Scope           | Accessible everywhere             |
| Local (Function) Scope | Inside functions only             |
| Block Scope            | Inside `{}` (with `let`, `const`) |

<pre>
let a = 10; // Global scope

function test() {
  let b = 20; // Function scope
  if (true) {
    let c = 30; // Block scope
    console.log(a, b, c); // ✅ OK
  }
  // console.log(c); ❌ Error
}
test();

</pre>

## 🪄 2. Hoisting in JavaScript
Hoisting is JavaScript’s behavior of moving declarations to the top of the scope.

### ✅ Hoisted:
- var (initialized as undefined)
- Function Declarations

### ❌ Not Hoisted:
- let, const (in Temporal Dead Zone)
- Function Expressions / Arrow Functions

<pre>
console.log(x);   // undefined
var x = 5;

greet();          // Hello
function greet() {
  console.log("Hello");
}

// ❌ Not hoisted properly
console.log(y);   // ReferenceError
let y = 10;

</pre>

## 🔁 3. Closures (Very Important)
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

<pre>
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

</pre>

> 🧠 Real Use Cases of Closures
>Private variables
>Memoization
>Function factories
>Event handlers

# ❓ Interview Questions
## 🔸 Q1: What is scope?
Answer: Scope determines where variables are accessible in your code — global, function, or block scope.

## 🔸 Q2: What is hoisting?
Answer: JavaScript's behavior of moving declarations to the top of their scope before execution. var and function declarations are hoisted.

## 🔸 Q3: What is a closure?
Answer: A closure is when a function retains access to its outer lexical scope even after the outer function has finished executing.


---

# ✅ Arrays Deep Dive in JavaScript 

## 📦 1. Array Basics
<pre>
let fruits = ["apple", "banana", "mango"];
let numbers = [1, 2, 3, 4];

</pre>
>You can access items by index:
<pre>
console.log(fruits[0]); // apple
</pre>

## 🔁 2. Looping through Arrays
### ✅ Using forEach()

<pre>
fruits.forEach(function(fruit) {
  console.log(fruit);
});

</pre>
>➡️ Executes a callback for each item (does not return a new array).

## 🧠 3. map() – Transform Each Element

<pre>
const nums = [1, 2, 3];

const doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

</pre>
>➡️ Returns a new array with modified elements. Does not mutate the original array.

## 🧹 4. filter() – Filter Based on Condition
 
<pre>
const nums = [1, 2, 3, 4, 5];

const even = nums.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

</pre>
>➡️ Returns a new array with only elements that satisfy the condition.

## 📉 5. reduce() – Reduce to One Value
<pre>
const nums = [1, 2, 3, 4];

const total = nums.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 10

</pre>
>➡️ Reduces the array to a single value (sum, product, etc.)

## ✅ 6. some() – At Least One is True

<pre>
const nums = [1, 3, 5];

const hasEven = nums.some(num => num % 2 === 0);
console.log(hasEven); // false

</pre>

## ✅ 7. every() – All Must Be True
<pre>
const nums = [2, 4, 6];

const allEven = nums.every(num => num % 2 === 0);
console.log(allEven); // true

</pre>
>➡️ Returns true only if all elements pass the condition.

# 🧠 Interview Questions
### 🔸 Q1: What’s the difference between map and forEach?
### Answer:
- map returns a new array; forEach returns undefined.
- map is used when transformation is needed.

### 🔸 Q2: When would you use reduce()?
### Answer: 
- When you need a single value from an array (sum, average, flattening, etc.)


# ✅ Strings, Template Literals & String Methods
## 📚 1. What is a String?
A string is a sequence of characters surrounded by quotes.
<pre>
let name1 = "Shubham";
let name2 = 'Yadav';
let name3 = `Hello`; // Template literal

</pre>
>✅ Strings are immutable → You can't change a character directly like an array.

## 🧵 2. Template Literals (Backticks)
### Use ` ` to:
- Embed variables
- Write multi-line strings

<pre>
let name = "Shubham ";
let greet = `Hello, ${name}`;

console.log(greet); // Hello, Shubham
</pre>

## 🛠️ 3. Useful String Methods
Here’s a table of the most useful and interview-relevant ones:




| Method                  | Description                               |
| ----------------------- | ----------------------------------------- |
| `length`                | Returns length of string                  |
| `toUpperCase()`         | Convert to uppercase                      |
| `toLowerCase()`         | Convert to lowercase                      |
| `trim()`                | Removes spaces from both ends             |
| `slice(start, end)`     | Extract part of string                    |
| `substring(start, end)` | Similar to slice, but no negative index   |
| `replace(old, new)`     | Replaces first match                      |
| `replaceAll()`          | Replaces all occurrences                  |
| `includes()`            | Checks if substring exists                |
| `indexOf()`             | Returns index of first occurrence         |
| `split()`               | Converts string to array                  |
| `startsWith()`          | Checks if string starts with given string |
| `endsWith()`            | Checks if ends with something             |
| `charAt(index)`         | Returns character at index                |


## 🔍 4. String Method Examples

<pre>
let str = "  JavaScript is Awesome!  ";

console.log(str.length);              // 27
console.log(str.trim());              // "JavaScript is Awesome!"
console.log(str.toUpperCase());       // "  JAVASCRIPT IS AWESOME!  "
console.log(str.includes("Awesome")); // true
console.log(str.slice(2, 13));        // "JavaScript"
console.log(str.split(" "));          // [ '', '', 'JavaScript', 'is', 'Awesome!', '', '' ]
console.log(str.replace("Awesome", "Great")); // "  JavaScript is Great!  "

</pre>


# ✅ Loops in JavaScript (for, while, for...of, forEach, break, continue)

## 🔁 1. Why Use Loops?
To repeat a block of code multiple times automatically.

## 🔢 2. for Loop (Classic)
<pre>
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4


</pre>
>✅ Used when you know how many times you want to repeat.

## 🔄 3. while Loop
<pre>
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

</pre>
>✅ Used when number of iterations is unknown initially.

## 🔂 4. do...while Loop
<pre>
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

</pre>
>✅ Runs at least once even if condition is false at start.

## 📦 5. for...of Loop (ES6+)
<pre>
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

</pre>
>✅ Used for iterating arrays, strings, maps, sets.

## 🧩 6. forEach() Method
<pre>
let nums = [1, 2, 3];
nums.forEach(function(num) {
  console.log(num);
});

</pre>
>✅ Executes a function for each element (array only), can’t break/return.

## 🧠 7. break and continue
🔸 break – exits the loop
<pre>
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// Output: 1 2

</pre>

🔸 continue – skips to next iteration
<pre>
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 1 2 4 5

</pre>

# ❓ Interview Questions
## Q1: Difference between for...of and forEach()?
### Answer:
- forEach() → method for arrays, can’t use break/continue
- for...of → works on arrays, strings, and supports break/continue

## Q2: Which loop to use when?
| Use Case          | Best Loop   |
| ----------------- | ----------- |
| Known iteration   | `for`       |
| Unknown iteration | `while`     |
| Read from array   | `for...of`  |
| Functional style  | `forEach()` |


---

# ✅ JavaScript Objects (Deep Dive + Interview Qs)

## 📦 1. What is an Object?
An object is a collection of key-value pairs. Keys are strings (or Symbols), and values can be anything.

<pre>
const person = {
    name: "Shubham",
    age: 22,
    isStudent; true
};
</pre>

## 🧠 2. Accessing Object Properties
<pre>
console.log(person.name);     // "Shubham"
console.log(person["age"]);  // 22

</pre>
#### ✅ Use dot . or bracket [] notation
#### ✅ [] required when:
- Key is stored in variable
- Key has spaces or special chars

## ✍️ 3. Modifying / Adding / Deleting Properties
<pre>
person.city = "Bhopal";        // Add
person.age = 23;               // Modify
delete person.isStudent;       // Delete

</pre>

## 📌 4. Looping Through Objects
✅ for...in – to loop through keys
<pre>
for (let key in person) {
  console.log(key, person[key]);
}
</pre>

## 🔎 5. Useful Object Methods
| Method                | Use                               |
| --------------------- | --------------------------------- |
| `Object.keys(obj)`    | Array of all keys                 |
| `Object.values(obj)`  | Array of all values               |
| `Object.entries(obj)` | Array of key-value pairs          |
| `hasOwnProperty(key)` | Checks if object has the property |

🔹 Example:
<pre>
const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));     // ['a', 'b', 'c']
console.log(Object.values(obj));   // [1, 2, 3]
console.log(Object.entries(obj));  // [['a', 1], ['b', 2], ['c', 3]]

console.log(obj.hasOwnProperty("b")); // true

</pre>

# ✅ Functions as First-Class Citizens, Higher-Order Functions & Callbacks

## 🚀 1. Functions as First-Class Citizens
### In JavaScript:
- You can store functions in variables
- Pass them as arguments
- Return them from other functions
This makes JS a functional programming language.
✅ Example:
<pre>
function greet() {
  return "Hello!";
}

let sayHi = greet;  // assigning function
console.log(sayHi()); // Hello!

</pre>

## 🔁 2. Higher-Order Functions (HOF)
A higher-order function is:
- A function that takes another function as an argument, or
- Returns a function
#### ✅ Example 1: Passing a function (callback)

<pre>
function greet(name) {
  console.log("Hello", name);
}

function processUser(callback) {
  const userName = "Shubham";
  callback(userName);
}

processUser(greet); // Hello Shubham

</pre>

✅ Example 2: Returning a function
<pre>
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

</pre>

## 📞 3. Callback Functions
A callback is a function passed into another function to be executed later.

#### ✅ Example:

<pre>
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 1000);
}

fetchData(() => {
  console.log("Callback executed");
});

</pre>

✅ Widely used in:
- Event handling
- API calls
- setTimeout, setInterval




<pre>
async function getUser(){
  return "Shubham"
}
getUser().then(res => console.log(res))
</pre>

# 🔹 Advanced Interview Questions on Promises

### Difference between callbacks and promises?
### What are promise states?
### Difference between .then().catch() vs try...catch with async/await?
### What is Promise.all, Promise.race, Promise.allSettled, Promise.any?
### Can you explain microtask queue in relation to promises?
### Why are promises better than nested callbacks (callback hell)?
**bold**            →  bold  
*italic*            →  italic  
~~strikethrough~~   →  strikethrough  
`inline code`       →  inline code
> blockquote        →  quote or highlight a note

- Item 1
- Item 2
  - Subitem

[Link Text](https://google.com)
![Alt Text](https://example.com/image.png)

`const name = "Shubham"`
<pre> ```js function greet(name) { return `Hello, ${name}`; } ``` </pre>

| Name     | Role      |
|----------|-----------|
| Shubham  | Developer |
| Anjali   | Designer  |

- [x] Task completed
- [ ] Task not completed

---
:rocket:     
:smile:      
:fire:       
:star:      








