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



<pre></pre>
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








