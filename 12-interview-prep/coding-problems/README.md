# 💻 Coding Problems for Interviews

Practice problems commonly asked in frontend interviews.

## How to Practice

1. Solve problems on your own first
2. Test your solutions thoroughly
3. Consider edge cases
4. Optimize for time and space complexity
5. Check solutions after attempting

---

## JavaScript Problems

### Easy

#### Problem 1: Reverse a String
Write a function that reverses a string.

```javascript
reverseString("hello") // "olleh"
reverseString("world") // "dlrow"
```

**Solution**: Check `../solutions/problem-01-reverse-string.js`

---

#### Problem 2: Find the Maximum Number
Write a function that finds the maximum number in an array.

```javascript
findMax([1, 5, 3, 9, 2]) // 9
findMax([-10, -5, -20]) // -5
```

---

#### Problem 3: Check if Palindrome
Write a function that checks if a string is a palindrome.

```javascript
isPalindrome("racecar") // true
isPalindrome("hello") // false
```

---

#### Problem 4: FizzBuzz
Write a function that prints numbers 1 to n:
- "Fizz" for multiples of 3
- "Buzz" for multiples of 5
- "FizzBuzz" for multiples of both

```javascript
fizzBuzz(15)
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
```

---

### Medium

#### Problem 5: Two Sum
Given an array of integers and a target sum, find two numbers that add up to the target.

```javascript
twoSum([2, 7, 11, 15], 9) // [0, 1] (indices)
twoSum([3, 2, 4], 6) // [1, 2]
```

---

#### Problem 6: Valid Anagram
Check if two strings are anagrams.

```javascript
isAnagram("listen", "silent") // true
isAnagram("hello", "world") // false
```

---

#### Problem 7: Group Anagrams
Group strings that are anagrams together.

```javascript
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
// [["eat","tea","ate"], ["tan","nat"], ["bat"]]
```

---

#### Problem 8: Longest Substring Without Repeating Characters
Find the length of the longest substring without repeating characters.

```javascript
lengthOfLongestSubstring("abcabcbb") // 3 ("abc")
lengthOfLongestSubstring("bbbbb") // 1 ("b")
```

---

### Hard

#### Problem 9: Implement Debounce
Implement a debounce function.

```javascript
const debouncedFn = debounce(() => console.log('Executed'), 300);
// Only executes after 300ms of no calls
```

---

#### Problem 10: Implement Throttle
Implement a throttle function.

```javascript
const throttledFn = throttle(() => console.log('Executed'), 300);
// Executes at most once per 300ms
```

---

#### Problem 11: Deep Clone Object
Implement deep cloning for nested objects.

```javascript
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
cloned.b.c = 3;
// original.b.c should still be 2
```

---

#### Problem 12: Flatten Array
Flatten a nested array to any depth.

```javascript
flatten([1, [2, [3, [4]], 5]]) // [1, 2, 3, 4, 5]
```

---

## React Problems

### Problem 13: Counter Component
Build a counter with increment, decrement, and reset.

### Problem 14: Todo List
Build a todo list with add, delete, and toggle functionality.

### Problem 15: Search Filter
Build a search filter that filters a list as you type (debounced).

### Problem 16: Modal Component
Create a reusable modal component with open/close functionality.

### Problem 17: Infinite Scroll
Implement infinite scroll loading more items as user scrolls.

### Problem 18: Custom useFetch Hook
Create a custom hook for fetching data with loading and error states.

---

## CSS Problems

### Problem 19: Center Content
Center content both horizontally and vertically (3 different methods).

### Problem 20: Holy Grail Layout
Create a header, footer, and 3-column layout using CSS Grid.

### Problem 21: Responsive Navigation
Build a mobile-first responsive navigation menu.

### Problem 22: Card Hover Effects
Create card hover effects with transitions.

---

## Algorithm Problems

### Problem 23: Binary Search
Implement binary search on a sorted array.

### Problem 24: Merge Sort
Implement merge sort algorithm.

### Problem 25: Valid Parentheses
Check if parentheses in a string are valid.

```javascript
isValid("()") // true
isValid("()[]{}") // true
isValid("(]") // false
```

---

## Solutions

Check the `../solutions/` directory for solutions to all problems.

## Tips

- Practice explaining your approach out loud
- Consider edge cases (empty arrays, null values, etc.)
- Optimize for both time and space complexity
- Write clean, readable code
- Test your solutions with multiple inputs

---

**Keep practicing! 💪**

