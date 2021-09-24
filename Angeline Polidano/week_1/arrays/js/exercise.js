console.log("Let's code!");
//

 //# Array and Functions Bonus Material

 //1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (x, y) {
  if( x > y)
   console.log(x);
 }else {
   console.log(y);
 }

 maxOfTwoNumbers(12, 77);

//};
// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function [ x, y, z] {
if ( x > y && z)
console.log (x); {
  else if (y > x && z ); {
     console.log (y) {
    }else{
         console.log(z);
       }
    }
   }
 }
 maxOfThree(4, 6, 45);

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const character = function(x) {
  if (x== 'a','e','i','o','u')
  return 'true';
  else 'false';
}

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.







// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
