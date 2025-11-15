/**
 * Variables and Data Types Examples
 * Run this file with: node 01-variables-and-types.js
 */

console.log('=== Variables and Data Types ===\n');

// 1. Variable Declarations
console.log('1. Variable Declarations:');
var oldWay = 'Function scoped';
let modernWay = 'Block scoped';
const constant = 'Cannot be reassigned';

console.log('var:', oldWay);
console.log('let:', modernWay);
console.log('const:', constant);

// 2. Data Types
console.log('\n2. Primitive Data Types:');

const stringVar = "Hello, World!";
const numberVar = 42;
const floatVar = 3.14159;
const booleanVar = true;
const nullVar = null;
const undefinedVar = undefined;
const symbolVar = Symbol('unique');
const bigIntVar = 9007199254740991n;

console.log('String:', stringVar, typeof stringVar);
console.log('Number:', numberVar, typeof numberVar);
console.log('Float:', floatVar, typeof floatVar);
console.log('Boolean:', booleanVar, typeof booleanVar);
console.log('Null:', nullVar, typeof nullVar); // typeof null is 'object' (JS bug)
console.log('Undefined:', undefinedVar, typeof undefinedVar);
console.log('Symbol:', symbolVar, typeof symbolVar);
console.log('BigInt:', bigIntVar, typeof bigIntVar);

// 3. Template Literals
console.log('\n3. Template Literals:');
const name = 'John';
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

// 4. Type Coercion
console.log('\n4. Type Coercion:');
console.log('5 + "5":', 5 + "5"); // "55" (string concatenation)
console.log('5 - "5":', 5 - "5"); // 0 (numeric subtraction)
console.log('"5" * 2:', "5" * 2); // 10 (numeric multiplication)
console.log('true + 1:', true + 1); // 2 (true coerces to 1)

// 5. Truthy and Falsy Values
console.log('\n5. Falsy Values:');
console.log('Boolean(false):', Boolean(false));
console.log('Boolean(0):', Boolean(0));
console.log('Boolean(""):', Boolean(""));
console.log('Boolean(null):', Boolean(null));
console.log('Boolean(undefined):', Boolean(undefined));
console.log('Boolean(NaN):', Boolean(NaN));

// Everything else is truthy
console.log('\n6. Truthy Values:');
console.log('Boolean(1):', Boolean(1));
console.log('Boolean("hello"):', Boolean("hello"));
console.log('Boolean([]):', Boolean([]));
console.log('Boolean({}):', Boolean({}));

// 6. Type Checking
console.log('\n7. Type Checking:');
const value = 42;
console.log('typeof value:', typeof value);
console.log('value instanceof Number:', value instanceof Number);
console.log('Number.isInteger(value):', Number.isInteger(value));

