// Assignment 1 - Part 1

// Q1
let str = "123";
let num = Number(str) + 7;
console.log(num);

// Q2
function checkValue(val) {
  if (!val) {
    return "Invalid";
  }
  return val;
}
console.log(checkValue(0));

// Q3
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// Q4
let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(function (n) {
  return n % 2 === 0;
});
console.log(evens);

// Q5
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log(merged);

// Q6
function getDay(day) {
  switch (day) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day";
  }
}
console.log(getDay(2));

// Q7
let words = ["a", "ab", "abc"];
let lengths = words.map(function (w) {
  return w.length;
});
console.log(lengths);

// Q8
function isDivisible(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "Divisible by both";
  }
  return "Not divisible by both";
}
console.log(isDivisible(15));

// Q9
const square = (n) => n * n;
console.log(square(5));

// Q10
const person = { name: "John", age: 25 };
function formatUser({ name, age }) {
  return `${name} is ${age} years old`;
}
console.log(formatUser(person));

// Q11
function sum(...nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5));

// Q12
function waitThreeSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
waitThreeSeconds().then((res) => console.log(res));

// Q13
function getMax(arr) {
  return Math.max(...arr);
}
console.log(getMax([1, 3, 7, 2, 4]));

// Q14
function getKeys(obj) {
  return Object.keys(obj);
}
console.log(getKeys({ name: "John", age: 30 }));

// Q15
function splitSentence(sentence) {
  return sentence.split(" ");
}
console.log(splitSentence("The quick brown fox"));


// Part 2: Essay Questions

/*
1. What is the difference between forEach and for...of? When would you use each?
forEach is only for arrays and cannot use break or continue.
for...of works with arrays and strings, and we can use break, continue, and async/await inside it.
I use forEach for simple array loops, and for...of when I need break or async/await.

2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.
Hoisting means JS moves variable and function declarations to the top before running code.
TDZ is the area before let or const is declared. If you use it before its line, you get an error.
Example:
console.log(a); // undefined
var a = 5;

console.log(b); // Error
let b = 10;

3. What are the main differences between == and ===?
== checks value only and converts types (5 == "5" is true).
=== checks value and type together (5 === "5" is false).

4. Explain how try-catch works and why it is important in async operations.
try runs the code, and catch catches any error so the app does not crash.
In async operations, it catches errors from failed promises or API calls.

5. What's the difference between type conversion and coercion? Provide examples of each.
Type conversion is manual by us: Number("5") -> 5.
Type coercion is automatic by JS: "5" + 2 -> "52".
*/
