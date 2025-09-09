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
```js
const person = { name: 'John', age: 30 };


### 10. What is type coercion in Javascript

**Answer:**
Type coercion is JavaScript's automatic conversion of one data type to another, especially in operations involving different types.
For example, ` '5' + 2  ` gives '52' due to string coercion.
To avoid bugs, I use === and explicit conversions.