/**
 * Array Methods and Manipulation Examples
 */

console.log('=== Arrays ===\n');

const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];
const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
];

// 1. Map - Transform elements
console.log('1. Map (double numbers):');
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const userNames = users.map(user => user.name);
console.log('1. Map (extract names):', userNames);

// 2. Filter - Select elements
console.log('\n2. Filter (even numbers):');
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

const adults = users.filter(user => user.age >= 30);
console.log('2. Filter (adults):', adults);

// 3. Reduce - Accumulate values
console.log('\n3. Reduce (sum):');
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

const totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log('3. Reduce (total age):', totalAge);

const groupedByAge = users.reduce((acc, user) => {
  const key = user.age >= 30 ? 'adult' : 'young';
  if (!acc[key]) acc[key] = [];
  acc[key].push(user);
  return acc;
}, {});
console.log('3. Reduce (group by age):', groupedByAge);

// 4. Find - Find first match
console.log('\n4. Find:');
const found = numbers.find(num => num > 3);
console.log(found); // 4

const user = users.find(u => u.id === 2);
console.log('4. Find (user by id):', user);

// 5. Some and Every
console.log('\n5. Some and Every:');
const hasEven = numbers.some(num => num % 2 === 0);
console.log('5. Some (has even):', hasEven); // true

const allPositive = numbers.every(num => num > 0);
console.log('5. Every (all positive):', allPositive); // true

// 6. ForEach - Iterate (side effects)
console.log('\n6. ForEach:');
numbers.forEach((num, index) => {
  console.log(`6. Index ${index}: ${num}`);
});

// 7. Array Destructuring
console.log('\n7. Destructuring:');
const [first, second, ...rest] = numbers;
console.log('7. First:', first);
console.log('7. Second:', second);
console.log('7. Rest:', rest);

const [, , third] = numbers; // Skip first two
console.log('7. Third:', third);

// 8. Spread Operator
console.log('\n8. Spread Operator:');
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log('8. Combined:', combined);

const copied = [...numbers];
console.log('8. Copied:', copied);

// Add to beginning/end
const withZero = [0, ...numbers];
const withSix = [...numbers, 6];
console.log('8. With zero:', withZero);
console.log('8. With six:', withSix);

// 9. Array Methods Chain
console.log('\n9. Method Chaining:');
const result = numbers
  .map(n => n * 2)      // [2, 4, 6, 8, 10]
  .filter(n => n > 5)   // [6, 8, 10]
  .reduce((sum, n) => sum + n, 0); // 24
console.log('9. Chained result:', result);

// 10. Common Array Operations
console.log('\n10. Common Operations:');

// Push/Pop
const stack = [1, 2, 3];
stack.push(4);
console.log('10. After push:', stack);
stack.pop();
console.log('10. After pop:', stack);

// Shift/Unshift
stack.unshift(0);
console.log('10. After unshift:', stack);
stack.shift();
console.log('10. After shift:', stack);

// Slice (non-mutating)
const sliced = numbers.slice(1, 3);
console.log('10. Slice (1,3):', sliced);
console.log('10. Original unchanged:', numbers);

// Splice (mutating)
const spliceArray = [1, 2, 3, 4, 5];
spliceArray.splice(2, 1, 'new');
console.log('10. Splice result:', spliceArray);

// 11. Array.from and Array.of
console.log('\n11. Array.from and Array.of:');
const fromString = Array.from('hello');
console.log('11. Array.from string:', fromString);

const fromSet = Array.from(new Set([1, 2, 2, 3]));
console.log('11. Array.from Set:', fromSet);

const fromArray = Array.of(1, 2, 3);
console.log('11. Array.of:', fromArray);

// 12. Flattening Arrays
console.log('\n12. Flattening:');
const nested = [1, [2, 3], [4, [5, 6]]];
const flattened = nested.flat();
console.log('12. Flat(1):', flattened);

const fullyFlattened = nested.flat(Infinity);
console.log('12. Flat(Infinity):', fullyFlattened);

