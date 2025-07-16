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
Browser	JS Engine
Chrome - V8, Firefox-SpiderMonkey Safari-JavaScriptCore, Edge-Chakra (now uses V8)


## 🧵 3. JS is Single-threaded & Non-blocking

Single-threaded: Runs one task at a time.
Non-blocking: Uses the event loop to handle tasks like fetching data asynchronously.

📌 Event Loop ensures JS handles multiple operations efficiently without blocking the UI.



## ❓ Interview Questions

### 🔸 Q1: What is the difference between JavaScript and ECMAScript?
Answer: ECMAScript is the specification standard; JavaScript is the actual implementation used in browsers and includes additional features like DOM APIs.

### 🔸 Q2: How is JavaScript single-threaded but asynchronous?
Answer: JS uses a single main thread to run code but offloads tasks like timers, API calls to the Web APIs. When they finish, they are added to the callback queue and executed via the event loop.

### 🔸 Q3: What is the role of the JavaScript Engine?
Answer: The JS engine parses, compiles (JIT), and executes code. It manages memory and executes JavaScript instructions efficiently.

## 🧠 Flashcards (Revise Daily)
Term Meaning
JS Engin - Converts JS code to machine code, 
Single-threaded	- One instruction at a time, 
Asynchronous - Handles tasks without waiting,
DOM	Document - Object Model,
Event Loop - Manages async operations


# ✅ Variables, Data Types & Type Conversion

## 📍 1. Variables in JavaScript
### Variables are containers for storing data.
✅ Ways to Declare Variables:
1. var name = "Shubham"; // Function-scoped
2. let age = 22;         // Block-scoped
3. const PI = 3.14;      // Block-scoped, cannot be reassigned

## 🧃 2. Rules for Naming Variables
1. Can contain letters, digits, underscores, $
2. Cannot start with a number
3. Case-sensitive (name and Name are different)
4. No JS reserved words like let, if, class

## 🔍 3. JavaScript Data Types
### 🔹 Primitive Types (immutable)

1. String	"hello"
2. Number	123, 3.14
3. Boolean	true, false
4. Null	null
5. Undefined	undefined
6. Symbol	Symbol('id')
7. BigInt	12345678901234567890n

### 🔸 Non-Primitive (Reference) Types
1. Objects: { name: "Shubham" }
2. Arrays: [1, 2, 3]
3. Functions: function() {}


## 📥 4. typeof Operator
1. console.log(typeof "Hello"); // string
2. console.log(typeof 42);      // number
3. console.log(typeof null);    // 🔥 "object" (quirk in JS)


## 🔄 5. Type Conversion
### ✅ Implicit Type Coercion
#### JS automatically converts types in some expressions.

1. console.log("5" + 1);     // "51" (number → string)
2. console.log("5" - 1);     // 4    (string → number)
3. console.log(true + 1);    // 2    (true → 1)

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

# Operators & Control Flow
## 🔢 JavaScript Operators
1. Arithmetic Operators:
+  -  *  /  %  **  ++  --

2. Comparison Operators:
#### ==      // Equal (loose, type-converting)
#### ===     // Strict equal (type + value)
#### !=, !== // Not equal
#### >, <, >=, <=

3. Logical Operators:

#### &&  // AND
#### ||  // OR
#### !   // NOT

4. Assignment Operators:

#### =, +=, -=, *=, /=, %=

### Examples:

#### let a = 10, b = "10";

#### console.log(a == b);   // true (type conversion)
#### console.log(a === b);  // false (strict)
#### console.log(!true);    // false
#### console.log(true && false); // false


## 🔁 Conditional Statements



