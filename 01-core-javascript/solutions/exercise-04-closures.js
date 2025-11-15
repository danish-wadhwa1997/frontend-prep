/**
 * Exercise 4: Scope and Closures - Solutions
 */

// 1. Counter using closures
function createCounter() {
  let count = 0;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = 0),
    getCount: () => count
  };
}

const counter = createCounter();
console.log('1. Counter:', counter.increment()); // 1
console.log('1. Counter:', counter.increment()); // 2
console.log('1. Counter:', counter.getCount()); // 2
console.log('1. Counter:', counter.decrement()); // 1
console.log('1. Counter reset:', counter.reset()); // 0

// 2. Unique ID Generator
function createIdGenerator() {
  let id = 0;
  
  return () => ++id;
}

const generateId = createIdGenerator();
console.log('2. ID:', generateId()); // 1
console.log('2. ID:', generateId()); // 2
console.log('2. ID:', generateId()); // 3

// 3. Bank Account with closures
function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;
  
  return {
    deposit: (amount) => {
      if (amount > 0) {
        balance += amount;
        return balance;
      }
      throw new Error('Deposit amount must be positive');
    },
    withdraw: (amount) => {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return balance;
      }
      throw new Error('Insufficient funds or invalid amount');
    },
    getBalance: () => balance
  };
}

const account = createBankAccount(100);
console.log('3. Initial balance:', account.getBalance()); // 100
console.log('3. After deposit:', account.deposit(50)); // 150
console.log('3. After withdraw:', account.withdraw(30)); // 120
console.log('3. Final balance:', account.getBalance()); // 120

// 4. Memoization function
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache[key]) {
      console.log('4. Cache hit for:', key);
      return cache[key];
    }
    
    console.log('4. Computing for:', key);
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

// Example: Expensive function
function expensiveFunction(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

const memoizedExpensive = memoize(expensiveFunction);
console.log('4. First call:', memoizedExpensive(1000000)); // Computes
console.log('4. Second call:', memoizedExpensive(1000000)); // From cache

