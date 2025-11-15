/**
 * Problem 9: Implement Debounce
 * Solutions
 */

// Solution 1: Basic debounce
function debounce1(func, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Solution 2: With immediate option
function debounce2(func, delay, immediate = false) {
  let timeoutId;
  
  return function(...args) {
    const callNow = immediate && !timeoutId;
    
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) {
        func.apply(this, args);
      }
    }, delay);
    
    if (callNow) {
      func.apply(this, args);
    }
  };
}

// Solution 3: Class-based debounce
class Debounce {
  constructor(func, delay) {
    this.func = func;
    this.delay = delay;
    this.timeoutId = null;
  }
  
  execute(...args) {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.func.apply(this, args);
    }, this.delay);
  }
}

// Example usage
function search(query) {
  console.log('Searching for:', query);
}

const debouncedSearch = debounce1(search, 300);

// Simulate rapid calls
debouncedSearch('r');
debouncedSearch('re');
debouncedSearch('rea');
debouncedSearch('reac');
debouncedSearch('react'); // Only this will execute after 300ms

// Real-world example: Search input
// <input onInput={(e) => debouncedSearch(e.target.value)} />

// Best: Solution 1 for most cases, Solution 2 if you need immediate option

