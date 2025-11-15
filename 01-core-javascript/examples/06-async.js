/**
 * Asynchronous JavaScript Examples
 * Promises, Async/Await, Event Loop
 */

console.log('=== Asynchronous JavaScript ===\n');

// 1. Callbacks (Old Way)
console.log('1. Callbacks:');
function fetchDataCallback(callback) {
  setTimeout(() => {
    callback('Data received via callback');
  }, 1000);
}

fetchDataCallback((data) => {
  console.log('1. Callback result:', data);
});

// 2. Promises
console.log('\n2. Promises:');
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Data received via Promise');
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 1000);
  });
}

fetchData()
  .then(data => console.log('2. Promise result:', data))
  .catch(error => console.error('2. Promise error:', error.message));

// 3. Promise Chaining
console.log('\n3. Promise Chaining:');
fetchData()
  .then(data => {
    console.log('3. Step 1:', data);
    return data.toUpperCase();
  })
  .then(uppercase => {
    console.log('3. Step 2:', uppercase);
    return uppercase.length;
  })
  .then(length => {
    console.log('3. Step 3 - Length:', length);
  });

// 4. Promise.all - Wait for all
console.log('\n4. Promise.all:');
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log('4. Promise.all result:', values);
  });

// 5. Promise.allSettled - Wait for all (success or failure)
console.log('\n5. Promise.allSettled:');
const settled1 = Promise.resolve('Success');
const settled2 = Promise.reject('Error');
const settled3 = Promise.resolve('Another success');

Promise.allSettled([settled1, settled2, settled3])
  .then(results => {
    console.log('5. Promise.allSettled:', results);
  });

// 6. Promise.race - First to complete
console.log('\n6. Promise.race:');
const fast = new Promise(resolve => setTimeout(() => resolve('Fast'), 100));
const slow = new Promise(resolve => setTimeout(() => resolve('Slow'), 500));

Promise.race([fast, slow])
  .then(result => {
    console.log('6. Promise.race winner:', result);
  });

// 7. Async/Await
console.log('\n7. Async/Await:');
async function fetchDataAsync() {
  try {
    const data = await fetchData();
    console.log('7. Async/await result:', data);
    return data;
  } catch (error) {
    console.error('7. Async/await error:', error.message);
  }
}

fetchDataAsync();

// 8. Async/Await with Multiple Promises
console.log('\n8. Async/Await with Promise.all:');
async function fetchMultiple() {
  const [result1, result2, result3] = await Promise.all([
    fetchData(),
    fetchData(),
    fetchData()
  ]);
  console.log('8. Multiple results:', result1, result2, result3);
}

fetchMultiple();

// 9. Fetch API Example
console.log('\n9. Fetch API:');
async function fetchUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const user = await response.json();
    console.log('9. Fetch user:', user.name);
    return user;
  } catch (error) {
    console.error('9. Fetch error:', error.message);
  }
}

// Uncomment to test (requires internet)
// fetchUser();

// 10. Event Loop Demonstration
console.log('\n10. Event Loop Order:');
console.log('10. Synchronous 1');

setTimeout(() => {
  console.log('10. Macro task (setTimeout)');
}, 0);

Promise.resolve().then(() => {
  console.log('10. Micro task (Promise)');
});

console.log('10. Synchronous 2');

// Output order:
// Synchronous 1
// Synchronous 2
// Micro task (Promise)
// Macro task (setTimeout)

// 11. Custom Promise
console.log('\n11. Custom Promise:');
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedGreeting() {
  console.log('11. Starting...');
  await delay(1000);
  console.log('11. Hello after 1 second!');
}

delayedGreeting();

// 12. Error Handling Patterns
console.log('\n12. Error Handling:');

// Pattern 1: Try/Catch with async/await
async function fetchWithErrorHandling() {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    console.error('12. Error caught:', error.message);
    return null;
  }
}

// Pattern 2: .catch() with promises
fetchData()
  .then(data => data)
  .catch(error => {
    console.error('12. Error handled:', error.message);
    return null;
  });

// Pattern 3: Wrapper function
async function safeAsync(fn) {
  try {
    return await fn();
  } catch (error) {
    console.error('12. Safe wrapper caught:', error.message);
    return null;
  }
}

