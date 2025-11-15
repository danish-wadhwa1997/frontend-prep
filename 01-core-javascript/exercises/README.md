# 📝 JavaScript Exercises

Practice problems to reinforce your understanding of JavaScript fundamentals.

## How to Use

1. Try to solve each exercise on your own
2. Write your solution in a separate file
3. Compare with solutions in `../solutions/` folder
4. Understand different approaches

## Exercises

### Easy Level

#### Exercise 1: Variables and Types
**File**: `exercise-01-variables.js`

Create a program that:
1. Declares variables using `let`, `const`, and `var`
2. Demonstrates the difference between primitive and reference types
3. Shows type coercion examples
4. Uses template literals to create a formatted string

---

#### Exercise 2: Functions
**File**: `exercise-02-functions.js`

Create functions for:
1. A function that accepts two numbers and returns their sum
2. Convert the above to an arrow function
3. A function with default parameters (greet someone with a default name)
4. A function that uses rest parameters to sum any number of arguments
5. A higher-order function that returns a function to multiply by a given number

---

#### Exercise 3: Arrays
**File**: `exercise-03-arrays.js`

Given an array of objects:
```javascript
const products = [
  { id: 1, name: 'Laptop', price: 999, category: 'electronics' },
  { id: 2, name: 'Phone', price: 599, category: 'electronics' },
  { id: 3, name: 'Book', price: 19, category: 'books' },
  { id: 4, name: 'Chair', price: 149, category: 'furniture' }
];
```

Tasks:
1. Find all electronics (filter)
2. Get all product names (map)
3. Calculate total price (reduce)
4. Find the most expensive product
5. Group products by category
6. Create a new array with discounted prices (10% off)

---

### Medium Level

#### Exercise 4: Scope and Closures
**File**: `exercise-04-closures.js`

1. Create a counter using closures that can increment, decrement, and reset
2. Create a function that generates unique IDs (starting from 1, increments each call)
3. Create a bank account object using closures with:
   - Private balance
   - Deposit method
   - Withdraw method
   - getBalance method
4. Create a memoization function that caches function results

---

#### Exercise 5: Objects and Destructuring
**File**: `exercise-05-objects.js`

Given this object:
```javascript
const user = {
  id: 1,
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  },
  contact: {
    email: 'john@example.com',
    phone: '+1234567890',
    address: {
      street: '123 Main St',
      city: 'New York',
      zip: '10001'
    }
  },
  hobbies: ['reading', 'coding', 'gaming']
};
```

Tasks:
1. Extract firstName, lastName, and email using destructuring
2. Create a new object with only personalInfo and email (using spread)
3. Update the user's age to 31 without mutating the original
4. Add a new hobby 'cooking' without mutating the original
5. Create a function that safely accesses nested properties

---

#### Exercise 6: Array Methods
**File**: `exercise-06-array-methods.js`

Given this array:
```javascript
const employees = [
  { id: 1, name: 'John', department: 'Engineering', salary: 75000 },
  { id: 2, name: 'Jane', department: 'Marketing', salary: 65000 },
  { id: 3, name: 'Bob', department: 'Engineering', salary: 80000 },
  { id: 4, name: 'Alice', department: 'HR', salary: 55000 },
  { id: 5, name: 'Charlie', department: 'Engineering', salary: 90000 }
];
```

Tasks:
1. Get all engineering employees
2. Calculate average salary
3. Get employee names in uppercase
4. Find highest paid employee
5. Group employees by department
6. Increase all salaries by 10% (create new array)
7. Get total salary for each department

---

### Hard Level

#### Exercise 7: Async Programming
**File**: `exercise-07-async.js`

Create functions:
1. A function that simulates fetching user data (returns after 1 second)
2. A function that fetches user posts (returns after 1.5 seconds)
3. Use Promise.all to fetch both concurrently
4. Create a retry function that retries a failed promise up to 3 times
5. Create a timeout wrapper that rejects if promise takes too long
6. Implement a queue system that processes promises one at a time

---

#### Exercise 8: Complex Problem
**File**: `exercise-08-complex.js`

Build a shopping cart system:
1. Create a cart using closures
2. Methods: addItem, removeItem, getTotal, applyDiscount, clearCart
3. Items should have: id, name, price, quantity
4. Implement discount codes: 'SAVE10' (10% off), 'SAVE20' (20% off)
5. Calculate shipping: free over $100, otherwise $10
6. Add tax calculation (8% sales tax)

---

## Solutions

Check the `../solutions/` directory for solutions after you've attempted the exercises.

## Tips

- Don't look at solutions until you've tried yourself
- There are often multiple correct solutions
- Focus on understanding, not just solving
- Test your code with different inputs
- Use console.log() to debug

---

**Happy coding! 💻**

