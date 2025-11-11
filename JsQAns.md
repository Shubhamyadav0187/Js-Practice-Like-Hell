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

