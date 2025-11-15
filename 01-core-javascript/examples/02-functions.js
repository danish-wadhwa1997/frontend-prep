/**
 * Functions Examples
 * Demonstrates different function declarations and patterns
 */

console.log('=== Functions ===\n');

// 1. Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log('1. Function Declaration:', greet('John'));

// 2. Function Expression
const greetExpr = function(name) {
  return `Hello, ${name}!`;
};
console.log('2. Function Expression:', greetExpr('Jane'));

// 3. Arrow Function
const greetArrow = (name) => `Hello, ${name}!`;
console.log('3. Arrow Function:', greetArrow('Bob'));

// 4. Arrow Function with Multiple Parameters
const add = (a, b) => a + b;
console.log('4. Arrow with params:', add(5, 3));

// 5. Arrow Function with Multiple Lines
const processData = (data) => {
  const doubled = data.map(item => item * 2);
  return doubled.filter(item => item > 10);
};
console.log('5. Arrow multi-line:', processData([1, 5, 8, 12]));

// 6. Default Parameters
function greetDefault(name = 'Guest') {
  return `Hello, ${name}!`;
}
console.log('6. Default params:', greetDefault());
console.log('6. Default params (with value):', greetDefault('Alice'));

// 7. Rest Parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log('7. Rest parameters:', sum(1, 2, 3, 4, 5));

// 8. Spread Operator in Function Calls
const numbers = [1, 2, 3, 4];
console.log('8. Spread operator:', Math.max(...numbers));

// 9. Higher-Order Functions
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

const multiplyBy2 = multiplyBy(2);
const multiplyBy5 = multiplyBy(5);
console.log('9. Higher-order (x2):', multiplyBy2(4));
console.log('9. Higher-order (x5):', multiplyBy5(4));

// 10. Immediately Invoked Function Expression (IIFE)
(function() {
  console.log('10. IIFE executed immediately');
})();

// 11. Callback Function
function processArray(arr, callback) {
  return arr.map(callback);
}

const numbers2 = [1, 2, 3, 4];
const doubled = processArray(numbers2, (num) => num * 2);
console.log('11. Callback function:', doubled);

// 12. Function as First-Class Citizen
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

function calculate(a, b, operation) {
  return operation(a, b);
}

console.log('12. First-class citizen:', calculate(10, 5, operations.add));

