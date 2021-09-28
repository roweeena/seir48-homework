// // # Array and Functions Bonus Material
// //
// // 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to
// figure this out.
const maxOfTwoNumbers = function (x , y) {
  if (x > y) {
    console.log(`${x} is larger than ${y}`);
  } else {
    console.log(`${y} is larger than ${x}`);
  };
};
maxOfTwoNumbers(3 , 7);
maxOfTwoNumbers(4 ,19);
maxOfTwoNumbers(122 , 2);
maxOfTwoNumbers(12 , 1);

// // 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (x , y , z) {
  if (x > y && x > z) {
    console.log(`${x} is the largest`);
  } else if (y > x && y > z) {
    console.log(`${y} is the largest`);
  } else {
    console.log(`${z} is the largest`);
  };
};

maxOfThree( 1 , 2, 3 );
maxOfThree( 7 , 6 , 5 );
maxOfThree( 10 , 11 , 9 );
// // 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const thiIsAFunction = function (x) {
  if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
    console.log(true);
  } else {
    console.log(false);
  };
};
thiIsAFunction('a');
thiIsAFunction('c');
thiIsAFunction('s');
thiIsAFunction('t');
thiIsAFunction('e');
thiIsAFunction('o');
thiIsAFunction('u');
// // 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers
//  in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
// //
// numbers = [1,4,6,8,9];
// const sumArray = function () {
//   for (i = 0 ; i > numbers.length ; i++)
//   let result = numbers[i];
//   let addition = result
//     console.log(result);
//   };
// };
// // ## Bonus
// //
// // 5. Define a function `reverseString` that computes the reversal of a string. For example,
//  reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function (str) {
  console.log(string.reverse());
};
reverseString(string);
// // 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// // 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of
// words that are longer than i.
