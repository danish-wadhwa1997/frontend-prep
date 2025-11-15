/**
 * Scope and Closures Examples
 */

console.log('=== Scope and Closures ===\n');

// 1. Global Scope
var globalVar = 'I am global';
console.log('1. Global scope:', globalVar);

function testGlobal() {
  console.log('Inside function:', globalVar); // Accessible
}

testGlobal();

// 2. Function Scope
function testFunctionScope() {
  var functionVar = 'I am in function scope';
  console.log('2. Function scope:', functionVar);
  
  if (true) {
    var stillInFunction = 'Still accessible'; // var is function scoped
    console.log('2. Inside block:', stillInFunction);
  }
  
  console.log('2. Still accessible:', stillInFunction);
}
testFunctionScope();

// 3. Block Scope (let and const)
function testBlockScope() {
  if (true) {
    let blockVar = 'I am in block scope';
    const blockConst = 'Me too';
    console.log('3. Block scope let:', blockVar);
    console.log('3. Block scope const:', blockConst);
  }
  // console.log(blockVar); // Error: blockVar is not defined
}
testBlockScope();

// 4. Closure - Basic Example
function outerFunction(x) {
  let outerVar = x;
  
  function innerFunction(y) {
    console.log(`4. Closure: ${outerVar} + ${y} = ${outerVar + y}`);
    return outerVar + y;
  }
  
  return innerFunction;
}

const closure = outerFunction(10);
closure(5); // 15
closure(20); // 30

// 5. Closure - Counter Example
function createCounter() {
  let count = 0;
  
  return {
    increment: () => {
      count++;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    },
    getCount: () => count,
    reset: () => {
      count = 0;
      return count;
    }
  };
}

const counter = createCounter();
console.log('5. Counter increment:', counter.increment()); // 1
console.log('5. Counter increment:', counter.increment()); // 2
console.log('5. Counter getCount:', counter.getCount()); // 2
console.log('5. Counter decrement:', counter.decrement()); // 1

const counter2 = createCounter();
console.log('5. New counter:', counter2.increment()); // 1 (independent)

// 6. Closure - Data Privacy
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit: (amount) => {
      balance += amount;
      return balance;
    },
    withdraw: (amount) => {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return 'Insufficient funds';
    },
    getBalance: () => balance
  };
}

const account = createBankAccount(100);
console.log('6. Bank balance:', account.getBalance());
console.log('6. Deposit 50:', account.deposit(50));
console.log('6. Withdraw 30:', account.withdraw(30));
console.log('6. Final balance:', account.getBalance());

// 7. Closure in Loops (Common Gotcha)
console.log('\n7. Closure in loops (wrong way):');
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log('7. Wrong - i =', i); // Prints 3, 3, 3
  }, 100);
}

// Solution 1: Use let
console.log('7. Closure in loops (correct with let):');
for (let j = 0; j < 3; j++) {
  setTimeout(() => {
    console.log('7. Correct - j =', j); // Prints 0, 1, 2
  }, 200);
}

// Solution 2: IIFE
console.log('7. Closure in loops (correct with IIFE):');
for (var k = 0; k < 3; k++) {
  (function(index) {
    setTimeout(() => {
      console.log('7. IIFE - k =', index); // Prints 0, 1, 2
    }, 300);
  })(k);
}

