# 📘 JavaScript Interview Questions Answer


## 🔹 JavaScript Basics (1–10) 

---

### 1. What are the different data types in JavaScript?

**Answer:**  
JavaScript has 8 data types: 7 primitive types which are `String`, `Number`, `BigInt`, `Boolean`, `Undefined`, `Null`, and `Symbol` — and one non-primitive type, which is `Object`.  
Primitives are immutable and compared by value, while objects are mutable and compared by reference.

---

### 2. What is the difference between `==` and `===`?

**Answer:**  
The `==` operator compares two values after converting them to a common type — it performs type coercion.  
On the other hand, `===` is the strict equality operator; it checks both value and data type.  
I always prefer `===` to avoid unexpected bugs due to type coercion.

---

### 3. What is `undefined` vs `null`?

**Answer:**  
`undefined` means a variable has been declared but not assigned a value.  
`null` is an intentional absence of any value — we set it manually.  
So, `undefined` is the default, and `null` is deliberate.

---

### 4. Explain how JavaScript is a loosely typed language.

**Answer:**  
JavaScript is loosely typed or dynamically typed, which means I can assign any type of value to a variable without declaring its type.  
For example, I can assign a number to a variable and later assign a string to the same variable — the language won’t complain.

---

### 5. What is NaN in JavaScript?

**Answer:**  
`NaN` stands for Not-a-Number. It’s a special number value that indicates a failed mathematical operation, like dividing a string by a number.  
Interestingly, `NaN` is the only value in JavaScript that is not equal to itself.

---

### 6. What is the difference between `var`, `let`, and `const`?

**Answer:**  
`var` is function-scoped and allows redeclaration and hoisting.  
`let` and `const` are block-scoped — `let` can be reassigned, but `const` cannot.  
I always avoid `var` and prefer `let` and `const` for cleaner, safer code.

---

### 7. What is hoisting?

**Answer:**  
Hoisting is JavaScript's default behavior of moving declarations to the top of their scope.  
Variables declared with `var` are hoisted and initialized with `undefined`. Functions are fully hoisted.  
But variables declared with `let` and `const` are hoisted but not initialized — accessing them before declaration throws a ReferenceError.

---

### 8. What is the difference between `function` and arrow function?

**Answer:**  
Traditional functions have their own `this` context, which can change depending on how they are called.  
Arrow functions do not have their own `this`; they inherit it from the surrounding lexical scope.  
Also, arrow functions can't be used as constructors.

---

### 9. How do you create an object in JavaScript?

**Answer:**  
I can create an object using object literals like this:  
```
const person = { name: 'John', age: 30 };
```
---

### 10. What is type coercion in Javascript

**Answer:**

Type coercion is JavaScript's automatic conversion of one data type to another, especially in operations involving different types.
For example, ` '5' + 2  ` gives '52' due to string coercion.
To avoid bugs, I use === and explicit conversions.

---

### 11. What is Lexical Scope?

Definition:
Lexical scope means a variable’s scope is determined by its position (location) in the source code, not by how or where it’s called.

✅ Inner functions can access variables of outer functions, but not vice versa.

```
function outer() {
  let a = 10;

  function inner() {
    console.log(a); // ✅ Can access 'a' from outer function
  }

  inner();
}

outer();
```

`👉 Here, inner() has access to a because of lexical scoping — it’s defined inside outer().`




---


### 12. Explain the concept of Closures.

Definition:
A closure is formed when an inner function “remembers” the variables of its outer function even after the outer function has finished executing.

```
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer(); // outer() has finished
counter(); // 1
counter(); // 2
counter(); // 3
```

`👉 Even though outer() is done executing, the inner() function still “remembers” count.
That’s a closure.`

---

### 13. What are Global Variables? Are they bad?

Definition:
Variables declared outside any function or block are global variables, accessible everywhere.

```

let name = "Shubham"; // Global variable

function greet() {
  console.log("Hello, " + name);
}
greet(); // Hello, Shubham

```


Why they can be bad:

❌ Can be modified anywhere (hard to debug)

❌ Increase chance of naming conflicts
`❌ Stay in memory throughout app life`

👉 Use local variables or modules instead.

---

### 14. What is the Temporal Dead Zone (TDZ)?

Definition:
TDZ is the period between a variable being hoisted and its actual initialization, during which it cannot be accessed.

```

console.log(a); // ❌ ReferenceError (TDZ)
let a = 10;

```
`👉 a is hoisted but remains uninitialized — accessing it before initialization causes an error.`

---

### 17. Can a function be called before its declaration?

✅ Yes, but only if it’s a function declaration, not a function expression or arrow function.

```

// ✅ Works
sayHello();
function sayHello() {
  console.log("Hello!");
}

// ❌ Error
greet(); // Cannot access before initialization
const greet = () => console.log("Hi!");

```

` 👉 Because function declarations are hoisted, but expressions are not.`

---

### 18. How do closures help in data privacy?

Closures allow variables to be kept private inside a function scope — only accessible via inner functions.

```

function createCounter() {
  let count = 0; // private variable

  return {
    increment: function () { count++; console.log(count); },
    decrement: function () { count--; console.log(count); },
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.decrement(); // 0
// console.log(counter.count); ❌ undefined (private)

```

` 👉 count can’t be accessed directly — only through provided methods.
This is data privacy using closure.`

---

### 19. How to implement a private variable using closures?

You can hide variables inside a function and return functions that access them.

```

function secret() {
  let privateData = "Hidden Info";

  return {
    get: () => privateData,
    set: (newData) => { privateData = newData; }
  };
}

const obj = secret();
console.log(obj.get()); // Hidden Info
obj.set("Updated Info");
console.log(obj.get()); // Updated Info

```

` ✅ privateData is not directly accessible — only via get() and set().`

---

### 20. Can closures lead to memory leaks?

Yes, sometimes.

Closures keep references to their outer variables.
If not managed properly, those variables stay in memory even when not needed.

```

function bigData() {
  let largeArray = new Array(1000000).fill("data");

  return function () {
    console.log(largeArray[0]);
  };
}

const hold = bigData(); // closure holds reference to largeArray
// Even if we never use it again, largeArray stays in memory

```
----
----
----

### 21. What are First-Class Functions?

In JavaScript, function are first-class citizens, meaning they can be:
  1. Assign to variable,
  2. Passed as argument, and
  3. Return from other function.


```
function greet(name){
  rerturn `Hello, ${name}`;
}

// Assigned to variable
const sayHi = greet;

// Passed as argument
function callFunction(fn){
  console.log(fn("shubham"));
}
callFunction(sayHi);
```

`This allows JavaScript to treat functions like data — this is why we can have callbacks and higher-order functions.`

`In functions like map(), filter(), and reduce() — we pass functions as arguments.`

---

### 2️2. What is a Higher-Order Function?

Definition:
A higher-order function is a function that takes another function as an argument or returns a function.

````

function greet(name){
  return `Hello, ${name}`;
}

function processUserInput(callback){
  let name = "Shubham";
  console.log(callback(name))
}

processUserInput(greet);


````

`In-built Examples:
map(), filter(), reduce() in JavaScript arrays are all higher-order functions.`

`👉 “Can you name some higher-order functions in JavaScript?”
✅ Array.map(), Array.filter(), Array.reduce().`

---

### 23. What is a Pure Function?

Definition:
A pure function is one that:

Always returns the same output for the same input.

Doesn’t cause side effects (doesn’t modify variables outside its scope).

```
// Pure Function
function add(a, b) {
  return a + b;
}

// Impure Function
let c = 10;
function addImpure(a) {
  return a + c; // depends on external variable
}

```

---

### 24. How do you create a Constructor Function?

Definition:
A constructor function is a special function used to create objects with similar properties and methods using the new keyword.

```
function Person(name, age){
  this.name = name;
  this.age = age;
  this.greet = function(){
    console.log(`Hi, Im ${this.name}`);
  };
}

const user = new Person("Shubham", 27);

user.greet();

```
---

### 25. What is the Prototype Chain?

Definition:
Every JavaScript object has a hidden property [[Prototype]] (accessible via __proto__), which points to another object — forming a chain called the prototype chain.

This chain continues until it reaches null.

````
const arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true

````


Interview Explanation:
`
Prototype chain is how inheritance works in JavaScript — objects inherit properties from their prototypes.
`


Possible Question:
`
👉 “What is the end of the prototype chain?”
✅ Object.prototype (its prototype is null).`


---


### 26. What is the this Keyword?

Definition:
this refers to the object that is executing the current function.

Depend on context.

| Context                         | Value of `this`                          |
| ------------------------------- | ---------------------------------------- |
| Global scope                    | `window` (in browsers)                   |
| Inside object method            | The object itself                        |
| Inside a function (non–strict)  | `window`                                 |
| Inside a function (strict mode) | `undefined`                              |
| In a class constructor          | The instance of the class                |
| In event handler                | The HTML element that received the event |


```

const obj = {
  name: "Shubham".
  show: function (){
    console.log(this.name)
  }
};

obj.show(); //Shubham

````
----

### 27. How do bind(), call(), and apply() work?

They are used to manually set the value of this.


| Method    | Description                                                | Example                       |
| --------- | ---------------------------------------------------------- | ----------------------------- |
| `call()`  | Calls function immediately with given `this` and arguments | `fn.call(obj, arg1, arg2)`    |
| `apply()` | Same as `call()`, but arguments are in an array            | `fn.apply(obj, [arg1, arg2])` |
| `bind()`  | Returns a new function with `this` bound permanently       | `const newFn = fn.bind(obj)`  |


Example:

```

const person = { name: "Shubham" };

function greet(age, city) {
  console.log(`Hi ${this.name}, ${age} years old from ${city}`);
}

greet.call(person, 22, "Delhi");
greet.apply(person, [22, "Delhi"]);
const newGreet = greet.bind(person, 22, "Delhi");
newGreet(); // can be called later

```

### 28. Difference between Shallow and Deep Copy of an Object

| Type         | Description                        | Example                                                     |
| ------------ | ---------------------------------- | ----------------------------------------------------------- |
| Shallow Copy | Copies only first-level properties | `Object.assign({}, obj)` or `{...obj}`                      |
| Deep Copy    | Copies nested objects too          | `structuredClone(obj)` or `JSON.parse(JSON.stringify(obj))` |

```
const obj1 = { name: "Shubham", address: { city: "Delhi" } };
const shallow = { ...obj1 };
const deep = structuredClone(obj1);

obj1.address.city = "Mumbai";
console.log(shallow.address.city); // Mumbai ❌ (affected)
console.log(deep.address.city); // Delhi ✅ (not affected)

```
### 29. How do you merge two objects?

1. Using the Spread Operator (...)

Most modern and preferred method.

```const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = { ...obj1, ...obj2 };
console.log(merged); 

Output: { a: 1, b: 3, c: 4 }

```

✅ 2. Using Object.assign()
Example
```
 const obj1 = {a:1};
 const obj2 = {b:2};

 const merged = object.assign({}, obj1, obj2);
 console.log(merged);


 Output: { a:1, b:2 }

 ```
`👉 Object.assign() copies properties into the first argument.
👉 If keys collide, later objects overwrite earlier ones.`

✅ 3. Deep Merging (Nested Objects)

Spread and Object.assign() do NOT deep merge.

The easiest way to merge two objects is using the spread operator:
const merged = { ...obj1, ...obj2 };
It performs a shallow merge. For nested objects, you need a custom recursive deep merge.

---

### 30. What is the Event Loop ?

Event loop is a mechanism in javaScript that allows non-blocking, asynchronous behavior, even though javaScript itself is singl-threaded.


JavaScript has one main thread, meaning it can do one task at a time.

But we still use:

setTimeout()

fetch()

Promises

Async/await

DOM events (click, input)

All of these are asynchronous.

So who manages them?
👉 The Event Loop.

The event loop continuously checks if the call stack is empty, and if it is, it pushes the next callback or promise result from the callback queue or microtask queue to the stack.

🧩 Event Loop Flow

You run code → goes to the call stack.

If an async function appears (like setTimeout) → browser handles it.

When the async task finishes:

setTimeout result → goes to callback queue

Promise result → goes to microtask queue

Event loop always checks:

If call stack is empty → microtask queue runs first

Then callback queue runs.

```
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

```
```
Output:
A
D
C
B
```

🏁 In short
The Event Loop:

✔ Keeps JavaScript non-blocking
✔ Manages async tasks
✔ Moves tasks from queues → call stack
✔ Gives priority to microtasks (promises)

----

### 32. What is the Call Stack and Task Queue?
✅ Call Stack

A data structure where JavaScript keeps track of what function is currently running.

It follows LIFO (Last In, First Out).
```
Example:

function a() { b(); }
function b() { console.log("Done"); }

a();


Call Stack execution:

a() → b() → console.log → pop → pop → pop
```
✅ Task Queue (Callback Queue)

Stores callbacks from asynchronous tasks like:

setTimeout

DOM events

setInterval

Event loop pushes tasks from this queue to the call stack when the stack is empty.
---

### 33. What are Promises?

A Promise represents a value that will be available now, later, or never.

It has 3 states:

pending

fulfilled

rejected
```
Example:

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success"), 1000);
});
```

Used to avoid callback hell and handle async tasks in a cleaner way.

----

### 34. Difference Between async/await and Promises
Promises Use .then() and .catch()

More verbose

Chain-based

async/await

Syntactic sugar over promises

Looks like synchronous code

Easier to read and write
```
Example:

Promise:

fetchData()
  .then(res => console.log(res))
  .catch(err => console.error(err));


async/await:

async function load() {
  try {
    const res = await fetchData();
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}
```

----


### 35. What happens if you don’t handle a Promise rejection?

If a promise is rejected and you don’t use .catch() or try/catch, then:

In Browsers:

You get “UnhandledPromiseRejection” error in console.

In Node.js:

It may crash the app (older versions)

Newer versions show a warning

Always handle rejections:

`promise.catch(err => console.log(err));`

---

### 36. What is Callback Hell and How to Avoid It?
```
Callback Hell = when callbacks are nested too deeply:
doA(() => {
  doB(() => {
    doC(() => {
      doD(() => {
        console.log("Done");
      });
    });
  });
});

```
Problems:

Hard to read

Hard to debug

Hard to maintain

How to Avoid It

✔ Promises
✔ async/await
✔ Modular functions
✔ Use promise chaining

---

### 37. Explain Microtasks vs Macrotasks

1. Microtasks

Promise callbacks (then, catch)

MutationObserver

queueMicrotask()

2. Macrotasks

setTimeout

setInterval

DOM events

I/O

Execution Order

All microtasks are executed first

Then one macrotask

Repeat

```

Example:

setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("A"));


Output:

A
B
```

### 38. How does setTimeout work in JavaScript?

setTimeout does not run inside the call stack.

It is registered with the browser timer APIs.

After the timer finishes, the callback goes to the task queue.

The callback executes only when the call stack is empty.

```

Example:

setTimeout(() => console.log("Hello"), 0);
console.log("Hi");


Output:

Hi
Hello

```

### 39. How can you cancel a fetch request?

Use AbortController.
```

Example:

const controller = new AbortController();

fetch("url", { signal: controller.signal })
  .then(res => res.json())
  .catch(err => console.log(err.message));

controller.abort(); // cancels the request
```
### 40. What are common ways to handle asynchronous errors?
✔ 1. Promises with .catch()

`promise.catch(err => console.log(err));`

✔ 2. Try/Catch with async/await
```
async function load() {
  try {
    const data = await fetchData();
  } catch (err) {
    console.log(err);
  }
}
```

✔ 3. Global error handlers

Browser:
```
window.addEventListener("unhandledrejection", (err) => {
  console.log("Unhandled:", err.reason);
});
```

Node.js:
```
process.on("unhandledRejection", err => console.error(err));
```
✔ 4. Using AbortController for cancellation errors