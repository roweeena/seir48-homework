console.log("IS THIS WORKING");
// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers
//  as arguments and returns the largest of them. Use the if-then-else
//  construct available in Javascript. You'll have to remember
//  your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
console.log(maxOfTwoNumbers(12, 10));
// 2. Define a function `maxOfThree` that takes three numbers as arguments
//  and returns the largest of them.
const maxOfThree = function (a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
};
console.log(maxOfThree(45, 40, 32));
// 3. Write a function that takes a character (i.e. a string of length 1)
//  and returns true if it is a vowel, false otherwise.
const vowelSound = function (a) {
  if (a === "a" || a === "e" || a === "i" || a === "o" || a === "u") {
    return true;
  } else {
    return false;
  }
};
console.log(vowelSound("i"));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums
//  and multiplies (respectively) all the numbers in an array of numbers.
//  For example, `sumArray([1,2,3,4])` should return 10,
//  and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function (array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
console.log(sumArray([1, 2, 3, 4]));
const multiplyArray = function (array) {
  let multy = 1;
  for (i = 0; i < array.length; i++) {
    multy = multy * array[i];
  }
  return multy;
};
console.log(multiplyArray([1, 2, 3, 4]));

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a
// string. For example, reverseString("jag testar") should return the
// string "ratset gaj".
const reverseString = function (s) {
  return [...s].reverse().join("");
};
console.log(reverseString("Ehsan Alimo"));
// 6. Write a function `findLongestWord` that takes an array of words
// and returns the length of the longest one.
const findLongestWord = function (array) {
  let words = array.split(" ");
  let maxLength = 0;
  for (i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i];
    }
    return maxLength;
  }
};
console.log(findLongestWord("yjvvvc ubcw ubefu ubccyvw"));
