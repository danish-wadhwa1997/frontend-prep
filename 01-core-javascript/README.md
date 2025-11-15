# 📘 Core JavaScript Fundamentals

Master the fundamentals of JavaScript - the foundation of modern frontend development.

## 📚 Table of Contents

1. [Variables and Data Types](#variables-and-data-types)
2. [Functions](#functions)
3. [Scope and Closures](#scope-and-closures)
4. [Arrays](#arrays)
5. [Objects](#objects)
6. [Control Flow](#control-flow)
7. [ES6+ Features](#es6-features)

---

## Variables and Data Types

### `let`, `const`, and `var`

```javascript
// var - Function scoped, can be redeclared
var x = 1;
var x = 2; // No error

// let - Block scoped, cannot be redeclared
let y = 1;
// let y = 2; // Error: Identifier 'y' has already been declared

// const - Block scoped, cannot be reassigned
const z = 1;
// z = 2; // Error: Assignment to constant variable

// const with objects/arrays - can mutate contents
const arr = [1, 2, 3];
arr.push(4); // ✅ Valid
// arr = []; // ❌ Error: Cannot reassign
```

### Primitive Data Types

```javascript
// String
let name = "John";
let template = `Hello, ${name}!`; // Template literal

// Number
let age = 25;
let price = 19.99;

// Boolean
let isActive = true;
let isDeleted = false;

// Undefined
let value; // undefined

// Null
let empty = null;

// Symbol (ES6)
let sym = Symbol('description');

// BigInt (ES2020)
let bigNumber = 9007199254740991n;
```

---

## Functions

### Function Declarations

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

### Function Expressions

```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};
```

### Arrow Functions (ES6)

```javascript
// Single parameter
const greet = name => `Hello, ${name}!`;

// Multiple parameters
const add = (a, b) => a + b;

// No parameters
const getPi = () => 3.14159;

// Multiple lines
const process = (data) => {
  const result = data.map(item => item * 2);
  return result.filter(item => item > 10);
};
```

### Default Parameters

```javascript
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

greet(); // "Hello, Guest!"
greet('John'); // "Hello, John!"
```

### Rest Parameters

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3, 4); // 10
```

---

## Scope and Closures

### Global Scope

```javascript
let globalVar = "I'm global";

function showGlobal() {
  console.log(globalVar); // Accessible
}
```

### Function Scope

```javascript
function example() {
  let functionVar = "I'm in function scope";
  console.log(functionVar); // Accessible
}
// console.log(functionVar); // Error: Not accessible
```

### Block Scope

```javascript
if (true) {
  let blockVar = "I'm in block scope";
  const blockConst = "Me too";
}
// console.log(blockVar); // Error: Not accessible
```

### Closures

```javascript
function outerFunction(x) {
  // Outer function's variable
  let outerVar = x;
  
  // Inner function (closure)
  function innerFunction(y) {
    console.log(outerVar + y); // Access to outerVar
  }
  
  return innerFunction;
}

const closure = outerFunction(10);
closure(5); // 15
```

**Practical Example - Counter:**

```javascript
function createCounter() {
  let count = 0;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
```

---

## Arrays

### Array Methods

#### Map - Transform elements

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8]
```

#### Filter - Select elements

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
// [2, 4, 6]
```

#### Reduce - Accumulate values

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
// 10
```

#### Find - Find first match

```javascript
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' }
];
const user = users.find(u => u.id === 2);
// { id: 2, name: 'Jane' }
```

#### Some & Every

```javascript
const numbers = [1, 2, 3, 4];
numbers.some(n => n > 3); // true (at least one)
numbers.every(n => n > 0); // true (all)
```

#### ForEach - Iterate

```javascript
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));
// 2, 4, 6
```

### Array Destructuring

```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
```

### Spread Operator

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
```

---

## Objects

### Object Literals

```javascript
const person = {
  name: 'John',
  age: 30,
  greet() {
    return `Hello, I'm ${this.name}`;
  }
};
```

### Object Destructuring

```javascript
const person = { name: 'John', age: 30, city: 'NYC' };

const { name, age } = person;
console.log(name); // 'John'
console.log(age); // 30

// With renaming
const { name: personName } = person;

// With default values
const { name, country = 'USA' } = person;
```

### Spread Operator for Objects

```javascript
const person = { name: 'John', age: 30 };
const updated = { ...person, age: 31, city: 'NYC' };
// { name: 'John', age: 31, city: 'NYC' }
```

### Object Methods

```javascript
const obj = { a: 1, b: 2, c: 3 };

Object.keys(obj); // ['a', 'b', 'c']
Object.values(obj); // [1, 2, 3]
Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]]
```

---

## Control Flow

### If/Else

```javascript
if (condition) {
  // code
} else if (anotherCondition) {
  // code
} else {
  // code
}
```

### Switch

```javascript
switch (value) {
  case 1:
    console.log('One');
    break;
  case 2:
    console.log('Two');
    break;
  default:
    console.log('Other');
}
```

### Loops

```javascript
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// For...of (arrays, strings)
for (const item of array) {
  console.log(item);
}

// For...in (objects)
for (const key in object) {
  console.log(key, object[key]);
}

// While
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Do...while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);
```

---

## ES6+ Features

### Template Literals

```javascript
const name = 'John';
const message = `Hello, ${name}!
Welcome to JavaScript.`;
```

### Optional Chaining (ES2020)

```javascript
const user = {
  profile: {
    name: 'John'
  }
};

console.log(user?.profile?.name); // 'John'
console.log(user?.profile?.age); // undefined (no error)
```

### Nullish Coalescing (ES2020)

```javascript
const value = null ?? 'default'; // 'default'
const value2 = 0 ?? 'default'; // 0 (not 'default'!)
```

### Short Circuit Evaluation

```javascript
const result = value || 'default';
const result2 = value && 'exists';
```

---

## 💡 Practice Exercises

1. Create a function that takes an array and returns only unique values
2. Write a function that flattens a nested array
3. Implement a debounce function using closures
4. Create a counter using closures
5. Write a function to deep clone an object

---

## 📚 Additional Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

---

**Next**: [Advanced JavaScript](../02-advanced-javascript/README.md)

