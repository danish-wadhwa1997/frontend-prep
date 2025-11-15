/**
 * Objects and Object Methods Examples
 */

console.log('=== Objects ===\n');

// 1. Object Literals
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  greet() {
    return `Hello, I'm ${this.name}`;
  }
};

console.log('1. Object literal:', person);
console.log('1. Method call:', person.greet());

// 2. Object Destructuring
console.log('\n2. Destructuring:');
const { name, age } = person;
console.log('2. Name:', name);
console.log('2. Age:', age);

const { name: personName, city: location } = person;
console.log('2. Renamed:', personName, location);

const { name: firstName, country = 'USA' } = person;
console.log('2. Default value:', country);

// 3. Spread Operator for Objects
console.log('\n3. Spread Operator:');
const updated = { ...person, age: 31, email: 'john@example.com' };
console.log('3. Updated object:', updated);

const merged = { ...person, ...{ country: 'USA', zip: '10001' } };
console.log('3. Merged object:', merged);

// 4. Object Methods
console.log('\n4. Object Methods:');
const obj = { a: 1, b: 2, c: 3 };

console.log('4. Keys:', Object.keys(obj));
console.log('4. Values:', Object.values(obj));
console.log('4. Entries:', Object.entries(obj));

// 5. Object.entries to iterate
console.log('\n5. Iterating with entries:');
Object.entries(obj).forEach(([key, value]) => {
  console.log(`5. ${key}: ${value}`);
});

// 6. Object.assign
console.log('\n6. Object.assign:');
const target = { a: 1 };
const source = { b: 2, c: 3 };
const assigned = Object.assign(target, source);
console.log('6. Assigned:', assigned);
console.log('6. Target mutated:', target); // Note: target is mutated

// 7. Object.freeze and Object.seal
console.log('\n7. Freeze and Seal:');
const frozen = Object.freeze({ a: 1, b: 2 });
// frozen.a = 3; // Error in strict mode, silent fail otherwise
console.log('7. Frozen object:', frozen);

const sealed = Object.seal({ a: 1, b: 2 });
sealed.a = 3; // Allowed
// sealed.c = 3; // Not allowed
console.log('7. Sealed object:', sealed);

// 8. Object.create (Prototypal Inheritance)
console.log('\n8. Object.create:');
const parent = {
  greet() {
    return `Hello from ${this.name}`;
  }
};

const child = Object.create(parent);
child.name = 'Child';
console.log('8. Child greet:', child.greet());

// 9. Computed Property Names
console.log('\n9. Computed Properties:');
const key = 'dynamicKey';
const objWithComputed = {
  [key]: 'value',
  [`${key}2`]: 'value2'
};
console.log('9. Computed properties:', objWithComputed);

// 10. Object Shorthand
console.log('\n10. Object Shorthand:');
const name2 = 'Jane';
const age2 = 25;
const shorthandObj = { name2, age2 };
console.log('10. Shorthand:', shorthandObj);

// 11. Nested Objects
console.log('\n11. Nested Objects:');
const user = {
  id: 1,
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'New York',
    zip: '10001'
  },
  hobbies: ['reading', 'coding']
};

console.log('11. Nested access:', user.address.city);
console.log('11. Array in object:', user.hobbies);

// 12. Optional Chaining (ES2020)
console.log('\n12. Optional Chaining:');
console.log('12. Safe access:', user?.address?.city);
console.log('12. Safe access (null):', user?.address?.country?.code); // undefined, no error

// 13. Nullish Coalescing (ES2020)
console.log('\n13. Nullish Coalescing:');
const config = {
  timeout: 0,
  retries: null
};

const timeout = config.timeout ?? 5000; // 0 (because 0 is not null/undefined)
const retries = config.retries ?? 3; // 3 (because null is nullish)
console.log('13. Timeout:', timeout);
console.log('13. Retries:', retries);

// 14. Deep Clone
console.log('\n14. Deep Clone:');
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
cloned.b.c = 3;
console.log('14. Original:', original.b.c); // Still 2
console.log('14. Cloned:', cloned.b.c); // 3

// Using structuredClone (modern browsers)
if (typeof structuredClone !== 'undefined') {
  const cloned2 = structuredClone(original);
  cloned2.b.c = 4;
  console.log('14. StructuredClone original:', original.b.c);
  console.log('14. StructuredClone cloned:', cloned2.b.c);
}

