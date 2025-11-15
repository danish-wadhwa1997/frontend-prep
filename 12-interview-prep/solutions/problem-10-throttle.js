/**
 * Problem 10: Implement Throttle
 * Solutions
 */

// Solution 1: Basic throttle
function throttle1(func, delay) {
  let lastCall = 0;
  
  return function(...args) {
    const now = Date.now();
    
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Solution 2: Throttle with trailing execution
function throttle2(func, delay) {
  let timeoutId;
  let lastExecTime = 0;
  
  return function(...args) {
    const now = Date.now();
    const timeSinceLastExec = now - lastExecTime;
    
    if (timeSinceLastExec >= delay) {
      func.apply(this, args);
      lastExecTime = now;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - timeSinceLastExec);
    }
  };
}

// Solution 3: Using timestamp and leading/trailing options
function throttle3(func, delay, options = {}) {
  let timeoutId;
  let lastExecTime = 0;
  const { leading = true, trailing = true } = options;
  
  return function(...args) {
    const now = Date.now();
    const timeSinceLastExec = now - lastExecTime;
    
    if (!lastExecTime && !leading) {
      lastExecTime = now;
    }
    
    if (timeSinceLastExec >= delay) {
      if (lastExecTime === 0 && !leading) {
        lastExecTime = now;
        return;
      }
      func.apply(this, args);
      lastExecTime = now;
    } else if (trailing) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - timeSinceLastExec);
    }
  };
}

// Example usage: Scroll event
function handleScroll() {
  console.log('Scrolled!', window.scrollY);
}

const throttledScroll = throttle1(handleScroll, 100);

// window.addEventListener('scroll', throttledScroll);

// Example: Window resize
function handleResize() {
  console.log('Window resized!', window.innerWidth);
}

const throttledResize = throttle2(handleResize, 200);

// window.addEventListener('resize', throttledResize);

// Best: Solution 1 for simple cases, Solution 2 for trailing execution

