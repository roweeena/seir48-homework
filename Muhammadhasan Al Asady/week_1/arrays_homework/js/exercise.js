// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (a, b){
  if (a > b) {
  console.log(`Number ${a} is bigger than ${b}`)
} else {
  console.log(`Number ${b} is bigger than ${a}`)
 }
}
maxOfTwoNumbers(7, 5);
maxOfTwoNumbers(81, 92);

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.


const maxOfThree = function (a, b, c){
  if (a > b && c) {
  console.log(`Number ${a} is bigger than ${b} and ${c}`)
} else if (b > a && c){
  console.log(`Number ${b} is bigger than ${a} and ${c}`)
} else {
  console.log(`number ${c} is bigger than ${b} and ${a}`)
}
}
maxOfThree(7, 5, 4);
maxOfThree(93, 38,101);

//3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const character = function (x) {
  if (x === 'a' ||x=== 'e' ||x=== 'i'||x=== 'o' ||x=== 'u' ){
    return 'true';
  }   else {
  return 'false';
}
}
console.log (character('f'));
console.log (character('z'));
console.log (character('i'));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function (multiplyArray)
// could not finish
