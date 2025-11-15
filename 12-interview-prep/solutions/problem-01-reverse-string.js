/**
 * Problem 1: Reverse a String
 * Solutions
 */

// Solution 1: Using split, reverse, join
function reverseString1(str) {
  return str.split('').reverse().join('');
}

// Solution 2: Using a loop
function reverseString2(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Solution 3: Using reduce
function reverseString3(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

// Solution 4: Using recursion
function reverseString4(str) {
  if (str === '') return '';
  return reverseString4(str.substr(1)) + str[0];
}

// Solution 5: Using spread operator
function reverseString5(str) {
  return [...str].reverse().join('');
}

// Test cases
console.log('Solution 1:', reverseString1('hello')); // 'olleh'
console.log('Solution 2:', reverseString2('world')); // 'dlrow'
console.log('Solution 3:', reverseString3('hello')); // 'olleh'
console.log('Solution 4:', reverseString4('test')); // 'tset'
console.log('Solution 5:', reverseString5('react')); // 'tcaer'

// Best: Solution 1 (most readable) or Solution 5 (most modern)

