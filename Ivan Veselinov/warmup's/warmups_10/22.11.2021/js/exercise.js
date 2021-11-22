//
// # The Collatz conjecture
// The Collatz conjecture is a conjecture in mathematics named after Lothar Collatz, who first proposed it in 1937. It's also known as the 3n + 1 conjecture, the Ulam conjecture, the Kakutani's problem, the Thwaites conjecture, Hasse's problem or the Syracuse problem, the sequence of numbers that results is referred to as the hailstone numbers or the wondrous numbers.
//
// The problem is defined as follows:
//
// ```
// Take any positive integer n. If n is even, divide it by 2 to get n / 2.
// If n is odd, multiply it by 3 and add 1 to obtain 3n + 1.
// Repeat the process indefinitely.
// ```
// The conjecture is that no matter what number you start with, you will always eventually reach 1.
//
// Your aim to create a function that will count how many times it takes for a particular number to reach 1.
//
// ## Task
// Write a program that given a number, verifies this conjecture for all positive numbers greater than one. Ideally your program will output when it has completed, how many cycles it ran for and all the steps it took to reach the end.
//
// Examples to verify your program can be found https://en.wikipedia.org/wiki/Collatz_conjecture.


// loop!!!

const conjecture = function(n) {
  let count = 0;
  while (n > 1){
    if (n % 2 == 0) {
     n = n / 2
     console.log(`number is odd you enter ${n} `);
   }else if ( n % 2 !== 0){
     n = (3 * n) + 1;
     console.log(`number is even you enter ${n}`);
         }
         count++;
         console.log(`num - ${n}, count is : ${count} `);
       }
       console.log(`the final count is ${count}`);
     }

console.log(conjecture(16));
console.log(conjecture(24));
console.log(conjecture(32));
console.log(conjecture(52));
console.log(conjecture(53));
console.log(conjecture(64));
console.log(conjecture(44));



// without for

// const conjecture = function(n) {
//
//     if (n % 2 == 0) {
//      let sum = n / 2
//      console.log(`number is odd you enter ${n}, conjecture result is: ${sum} `);
//    }else if ( n % 2 !== 0){
//      sum = 3*n + 1;
//      console.log(`number is even you enter ${n} conjecture result is: ${sum}`);
//          }
//
//   }
//
// console.log(conjecture(16));
// console.log(conjecture(24));
// console.log(conjecture(32));
// console.log(conjecture(52));
// console.log(conjecture(53));
// console.log(conjecture(64));
// console.log(conjecture(44));




// // recursive
//
// const collatz_rec = function (num, count=0){
//   console.log(`the final count is ${count}`);
//
//   if (num === 1) {
//     console.log(`the final count is ${count}`);
//     return count;
//   }
//
//   // action even
//
//   if (num % 2 === 0) {
//     return collatz_rec(num / 2, count + 1) // recursion
//   }else{
//     return collatz_rec((num + 3) + 1, count + 1 )
//   }
// }
// console.log(collatz_rec(12));
