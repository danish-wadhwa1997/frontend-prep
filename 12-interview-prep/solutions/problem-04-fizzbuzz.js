/**
 * Problem 4: FizzBuzz
 * Solutions
 */

// Solution 1: Basic approach
function fizzBuzz1(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }
  return result;
}

// Solution 2: More concise
function fizzBuzz2(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    result.push(output || i);
  }
  return result;
}

// Solution 3: Using map
function fizzBuzz3(n) {
  return Array.from({ length: n }, (_, i) => {
    const num = i + 1;
    if (num % 15 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;
  });
}

// Solution 4: Functional approach
function fizzBuzz4(n) {
  return Array.from({ length: n }, (_, i) => {
    const num = i + 1;
    let output = '';
    if (num % 3 === 0) output += 'Fizz';
    if (num % 5 === 0) output += 'Buzz';
    return output || num;
  });
}

// Test
console.log('FizzBuzz(15):', fizzBuzz1(15));
// [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']

// Best: Solution 2 or 4 (cleanest and most maintainable)

