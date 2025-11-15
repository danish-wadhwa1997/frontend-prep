# 💬 Interview Preparation Guide

Common frontend interview questions with detailed answers and examples.

## 📚 Table of Contents

1. [JavaScript Questions](#javascript-questions)
2. [React Questions](#react-questions)
3. [CSS & HTML Questions](#css--html-questions)
4. [Browser & Web APIs](#browser--web-apis)
5. [Performance Questions](#performance-questions)
6. [System Design Questions](#system-design-questions)
7. [Behavioral Questions](#behavioral-questions)

---

## JavaScript Questions

### 1. What is the difference between `var`, `let`, and `const`?

**Answer:**
- **`var`**: Function-scoped, can be redeclared, hoisted (initialized as `undefined`)
- **`let`**: Block-scoped, cannot be redeclared, hoisted but not initialized (Temporal Dead Zone)
- **`const`**: Block-scoped, cannot be redeclared or reassigned, must be initialized

**Example:**
```javascript
// var
function example() {
  console.log(x); // undefined (hoisted)
  var x = 5;
}

// let/const
{
  // console.log(y); // ReferenceError: Cannot access before initialization
  let y = 10;
  // let y = 20; // SyntaxError: Identifier already declared
}
```

---

### 2. Explain closures with an example.

**Answer:**
A closure gives you access to an outer function's scope from an inner function. The inner function "remembers" the environment in which it was created.

**Example:**
```javascript
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

**Real-world use cases:**
- Data privacy/encapsulation
- Function factories
- Event handlers
- Callbacks and promises

---

### 3. What is the Event Loop?

**Answer:**
The Event Loop is JavaScript's mechanism for handling asynchronous operations. It continuously checks:
1. Call Stack (synchronous code)
2. Callback Queue (async callbacks)
3. Microtask Queue (promises, queueMicrotask)

**Execution order:**
- Synchronous code first
- Process all microtasks
- Process one macrotask
- Repeat

**Example:**
```javascript
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');

// Output: 1, 4, 3, 2
```

---

### 4. Explain `this` keyword in JavaScript.

**Answer:**
`this` refers to the object that is executing the current function. Its value depends on how the function is called:

```javascript
// Global context
console.log(this); // Window (browser) or Global (Node)

// Object method
const obj = {
  name: 'John',
  greet() {
    return `Hello, ${this.name}`;
  }
};

// Arrow functions (lexical this)
const obj2 = {
  name: 'John',
  greet: () => {
    return `Hello, ${this.name}`; // undefined (uses outer scope)
  }
};

// call, apply, bind
function greet() {
  return `Hello, ${this.name}`;
}

const person = { name: 'John' };
greet.call(person); // "Hello, John"
greet.apply(person); // "Hello, John"
const bound = greet.bind(person);
bound(); // "Hello, John"
```

---

### 5. What are Promises and async/await?

**Answer:**
Promises represent the eventual completion of an async operation. `async/await` is syntactic sugar over promises.

**Promise example:**
```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data received');
    }, 1000);
  });
};

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

**Async/await example:**
```javascript
const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
```

---

### 6. Explain prototypal inheritance.

**Answer:**
JavaScript uses prototypal inheritance where objects can inherit properties and methods from other objects through the prototype chain.

```javascript
// Constructor function
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return `Hello, I'm ${this.name}`;
};

// ES6 Classes (syntactic sugar)
class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return `Hello, I'm ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
}
```

---

## React Questions

### 1. What is React and why use it?

**Answer:**
React is a JavaScript library for building user interfaces. Key benefits:
- Component-based architecture
- Virtual DOM for performance
- One-way data flow
- Rich ecosystem
- Reusable components

---

### 2. Explain the Virtual DOM.

**Answer:**
Virtual DOM is an in-memory representation of the real DOM. React compares the virtual DOM with the previous version (diffing) and updates only the changed parts (reconciliation).

**Benefits:**
- Performance optimization
- Declarative programming
- Cross-browser compatibility

---

### 3. What are React Hooks?

**Answer:**
Hooks let you use state and other React features in functional components.

**Common Hooks:**

```javascript
import { useState, useEffect, useContext, useCallback, useMemo } from 'react';

// useState
const [count, setCount] = useState(0);

// useEffect
useEffect(() => {
  // Side effects
  return () => {
    // Cleanup
  };
}, [dependencies]);

// useContext
const value = useContext(MyContext);

// useCallback - memoize functions
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

// useMemo - memoize values
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

---

### 4. Explain the component lifecycle.

**Answer:**

**Class Components:**
- Mounting: `componentDidMount`
- Updating: `componentDidUpdate`
- Unmounting: `componentWillUnmount`

**Functional Components (Hooks):**
```javascript
useEffect(() => {
  // Mount and update
  return () => {
    // Unmount (cleanup)
  };
}, [dependencies]);
```

---

### 5. What is the difference between controlled and uncontrolled components?

**Answer:**

**Controlled (React manages state):**
```javascript
function ControlledInput() {
  const [value, setValue] = useState('');
  
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

**Uncontrolled (DOM manages state):**
```javascript
function UncontrolledInput() {
  const inputRef = useRef();
  
  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };
  
  return <input ref={inputRef} />;
}
```

---

### 6. How do you optimize React performance?

**Answers:**

1. **React.memo** - Prevent unnecessary re-renders
```javascript
const MyComponent = React.memo(({ name }) => {
  return <div>{name}</div>;
});
```

2. **useMemo** - Memoize expensive calculations
```javascript
const expensiveValue = useMemo(() => compute(a, b), [a, b]);
```

3. **useCallback** - Memoize functions
```javascript
const handleClick = useCallback(() => {
  doSomething();
}, [dependencies]);
```

4. **Code splitting**
```javascript
const LazyComponent = React.lazy(() => import('./Component'));
```

5. **Virtualization** - For long lists (react-window, react-virtualized)

---

## CSS & HTML Questions

### 1. Explain CSS Box Model.

**Answer:**
Every HTML element is a box with:
- **Content**: The actual content
- **Padding**: Space inside the element
- **Border**: Border around padding
- **Margin**: Space outside the border

```css
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
  /* Total width: 200 + 40 + 10 + 20 = 270px (without box-sizing) */
  box-sizing: border-box; /* Includes padding and border in width */
}
```

---

### 2. What is Flexbox?

**Answer:**
Flexbox is a one-dimensional layout method for arranging items in rows or columns.

```css
.container {
  display: flex;
  justify-content: center; /* Main axis */
  align-items: center; /* Cross axis */
  flex-direction: row; /* or column */
  flex-wrap: wrap;
}

.item {
  flex: 1; /* Grow, shrink, basis */
}
```

---

### 3. Explain CSS Grid.

**Answer:**
Grid is a two-dimensional layout system for rows and columns.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}

.item {
  grid-column: 1 / 3; /* Span columns */
  grid-row: 1 / 2; /* Span rows */
}
```

---

### 4. What are CSS preprocessors?

**Answer:**
Tools that extend CSS with variables, nesting, mixins, etc. (SASS, LESS, Stylus)

```scss
// SASS Example
$primary-color: #3498db;

.button {
  background-color: $primary-color;
  
  &:hover {
    background-color: darken($primary-color, 10%);
  }
}
```

---

## Browser & Web APIs

### 1. Explain the same-origin policy.

**Answer:**
A security measure that restricts how scripts from one origin can interact with resources from another origin. Same origin means:
- Same protocol (http/https)
- Same domain
- Same port

**Solutions:**
- CORS (Cross-Origin Resource Sharing)
- JSONP (legacy)
- Proxy server

---

### 2. What is localStorage vs sessionStorage?

**Answer:**
Both store key-value pairs in the browser:

- **localStorage**: Persists until explicitly cleared, shared across tabs
- **sessionStorage**: Cleared when tab closes, tab-specific

```javascript
// localStorage
localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');
localStorage.removeItem('key');

// sessionStorage
sessionStorage.setItem('key', 'value');
```

---

## Performance Questions

### 1. How do you optimize website performance?

**Answers:**
- Minimize HTTP requests
- Use CDN for assets
- Enable compression (Gzip/Brotli)
- Optimize images (WebP, lazy loading)
- Code splitting
- Tree shaking
- Minification
- Caching strategies
- Service Workers for offline support
- Monitor Core Web Vitals

---

### 2. What are Core Web Vitals?

**Answer:**
Google's metrics for page experience:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## System Design Questions

### 1. Design a URL shortener (frontend perspective).

**Answer:**
- Input form for long URL
- API call to backend service
- Display short URL with copy button
- QR code generation
- Analytics dashboard
- Error handling and loading states
- Responsive design

---

## Behavioral Questions

### Common Questions:

1. **Tell me about yourself.**
2. **Why do you want this position?**
3. **What's your biggest weakness?**
4. **Describe a challenging project.**
5. **How do you handle deadlines?**
6. **Tell me about a time you disagreed with a team member.**
7. **Why are you leaving your current role?**

### STAR Method:
- **S**ituation
- **T**ask
- **A**ction
- **R**esult

---

## 📝 Practice Tips

1. **Practice coding problems daily** (LeetCode, HackerRank)
2. **Build projects** to demonstrate skills
3. **Mock interviews** with peers
4. **Review your code** - explain your solutions
5. **Stay updated** with latest trends
6. **Prepare questions** to ask interviewers

---

## 📚 Additional Resources

- [Frontend Interview Handbook](https://github.com/yangshun/front-end-interview-handbook)
- LeetCode
- [React Interview Questions](https://github.com/sudheerj/reactjs-interview-questions)

---

**Keep practicing and good luck! 🚀**

