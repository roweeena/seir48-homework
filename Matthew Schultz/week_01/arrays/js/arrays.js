// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them.
//Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some
//googling to figure this out.

const maxOfTwoNumbers = function(num1, num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}

console.log(`The greatest number is ${maxOfTwoNumbers(10,100)}`);


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

console.log(`The greatest number is ${maxOfThree(5,10,100)}`);

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowelFinder = function(char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  } else {
    return false;
  }
}

console.log(vowelFinder('o'))
console.log(vowelFinder('n'))
console.log(vowelFinder('z'))

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively)
// all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])`
// should return 24.

const sumArray = [1, 2, 3];

let sumTotal = 0;

for (let i = 0; i < sumArray.length; i++) {
  sumTotal = sumTotal + sumArray[i];
}

console.log(sumTotal);


const multiplyArray = [1, 2, 5];

let multiplyTotal = 1;

for (let i = 0; i < multiplyArray.length; i++) {
  multiplyTotal = multiplyTotal * multiplyArray[i];
}

console.log(multiplyTotal);

//
// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar")
// should return the string "ratset gaj".

function reverseString(oldString) {
  let newString = "";
  for (let i = oldString.length - 1; i >= 0; i--) {
      newString = newString + oldString[i];
  }
  return newString;
}

console.log(reverseString('This is backwards'));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = ['bulldogs', 'broncos', 'titans'];

let longestWord = "";

for (let i = 0; i < findLongestWord.length; i++) {
  if (findLongestWord[i].length > longestWord.length) {
    longestWord = findLongestWord[i].length;
  }
}

console.log(longestWord);
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of
// words that are longer than i.

const listOfWords = ['one', 'two', 'three', 'four', 'longerword'];

let newList = [];

const filterLongWords = function(i) {
  for (let j = 0; j < listOfWords.length; j++) {
    if (listOfWords[j].length > i) {
      newList.push(listOfWords[j]);
    }
  }
  console.log(newList);
}

filterLongWords(3);
