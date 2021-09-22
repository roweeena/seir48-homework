// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function(a, b) {
  if (a > b) return a;
  else return b;
}

const testMaxOfTwoNumbers = function(iterations) {
  for (let i = 0; i < iterations; i++) {
    // Declares two random numbers between 0 and 1000
    let a = Math.round(Math.random() * 1000);
    let b = Math.round(Math.random() * 1000);
    console.log(a, b, `MAX = ${maxOfTwoNumbers(a,b)}`);
  }
}

testMaxOfTwoNumbers(4);

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function(a, b, c) {
  if (a > b && a > c) return a;
  else if (a < b && b > c) return b;
  else return c;
}

const testMaxOfThree = function(iterations) {
  for (let i = 0; i < iterations; i++) {
    // Declares three random numbers between 0 and 1000
    let a = Math.round(Math.random() * 1000);
    let b = Math.round(Math.random() * 1000);
    let c = Math.round(Math.random() * 1000);
    console.log(a, b, c, `MAX = ${maxOfTwoNumbers(a, b, c)}`);
  }
}

testMaxOfThree(4);

// Best practise:
const betterMaxOfThree = function(a, b, c) {
  return Math.max(a, b, c);
}

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const isVowel = function(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(char.toLowerCase());
}

// Tests all letters of the alphabet, in upper and lower cases.
const testIsVowel = function() {
  for (let i = 65; i < 123; i++) {
    if (i <= 90 || i >= 97) {
      let char = String.fromCharCode(i);
      console.log(char, isVowel(char));
    }
  }
}

testIsVowel();

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
const sumArray = function(array) {
  let sum = 0;
  for (let i of array) {
    sum += i;
  }
  return sum;
}

const multiplyArray = function(array) {
  let product = 1;
  for (let i of array) {
    product *= i;
  }
  return product;
}

// Tests random arrays of length 3-6 with values between 1 and 5.
const test_SumArray_And_MultplyArray = function() {
  // Determines a random array length between 3 and 5
  const arrayLength = (Math.floor(Math.random() * 3)) + 3;

  const array = [];
  for (let i = 0; i < arrayLength; i++) {
    let value = Math.ceil(Math.random() * 5);
    array.push(value);
  }
  console.log(array, `SUM: ${sumArray(array)}`, `PRODUCT: ${multiplyArray(array)}`);
}

test_SumArray_And_MultplyArray();

const betterSumArray = function(array) {
  return array.reduce((a, b) => a + b);
}

const betterMultplyArray = function(array) {
  return array.reduce((a, b) => a * b);
}

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function(string) {
  let output = '';
  for (let i = string.length - 1; i >= 0; i--) {
    output += string[i];
  }
  return output;
}

console.log(reverseString("jag testar"));
// This case returns "anãnam anãnam rab oof"
// (The tildes '~' are over the 'a' instead of 'n').
// function needs to be refactored to account for these cases.
console.log(reverseString("foo 𝌆 bar mañana mañana"));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function(words) {
  let longestWord = '';
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// I just used a random words generator online.
const someWords = ["Aspiringly", "interassociation", "leetonia", "nonecclesiastic", "pledget", "banderole", "perdita", "supersulphureted", "cany", "fixtureless"];

console.log(findLongestWord(someWords));

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
const filterLongWords = function(array, i) {
  return array.filter(word => word.length > i);
}

console.log(filterLongWords(someWords, 8));
