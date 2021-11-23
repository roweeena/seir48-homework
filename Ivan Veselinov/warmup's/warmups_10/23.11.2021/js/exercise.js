// -------------
// Prime Factors
// A prime number is any number greater than one that is only divisible by itself.
// 1 is not a prime number (it is not greater than 1).
// 2 is a prime number (it is greater than one and is only evenly divisible by itself and 1).
// 3 is a prime number (as above).
// 4 is not a prime number (it is evenly divisible by 2). The prime factors of an integer are the set of prime numbers that will divide the integer exactly.

// -------------
// Example
// What are the prime factors of 60?
// 1 is not a prime number.
// 2 is a prime number. 60 is evenly divisible by 2 (therefore 2 is a prime factor of 60), and leaves 30.
// 30 is evenly divisible by 2 (therefore 2 is a prime factor of 60), and leaves 15.
// 15 is not evenly divisible by 2.
// 3 is the next prime number. 15 is evenly divisible by 3 (therefore 3 is a prime factor of 60), and leaves 5.
// 4 is not a prime number.
// 5 is a prime number. 5 is evenly divisible by 5 (therefore 5 is a prime factor of 60), and leaves 1.
// When we get to 1, we're done.
// The prime factors of 60 are 2, 2, 3, 5 You can check this yourself:
// 2 * 2 * 3 * 5
// = 60
// Success!

// -------------
// YOUR TASK
// Write a function in Javascript which takes a number as its argument and returns an array containing the prime factors of that number.
//
// -------------
// BONUS
// Do it with recursion
//
// Some more examples of how to find prime factors
// mesacc.edu


// Pat solution

    //recursive function !!!!!!!!
const recPrimerFactors = function(num, factors=[]){

let i = 2;

      //60
  while ( num > i ){

    if ( num % i === 0){
      console.log(` ${i} is a factor of ${num} `);
      factors.push[i];
      num = num / i;
      recPrimerFactors(num, factors);
    }else {
      console.log(` ${i} is NOT a factor of ${num} `);
      i++;
    }
  }
  return factors
}


console.log(recPrimerFactors(60));
// 2 2 3 5

//
//
//
// const primerFactors = function(num){
//
// let factors = [];
// let i = 2;
//
//       //60
//   while ( num > 1){
//
//     if ( num % i === 0){
//       console.log(` ${i} is a factor of ${num} `);
//       factors.push[i];
//       num = num / i;
//     }else {
//       console.log(` ${i} is NOT a factor of ${num} `);
//       i++;
//     }
//   }
//
//   return factors
//
// }
//
//
// console.log(primerFactors(60));
// // 2 2 3 5


// Working solution!!! my solution
// const primerNumber = function(a){
//   console.log(`Your start number is ${a}`);
// final =[];
// let result = 0;
//
// for (let i = 2; a > i ; i++) {
//   if ( a % i === 0){
//       a = a / i;
//       result = a;
//       console.log(`${a} is divisible by ${i} and result is: ${result}`);
//       final.push(i);
//
//   }else{
//     console.log(`number ${a} is not devide `);
//   }
//
// }
//     console.log(`The result is: ${final}`);
// }
// primerNumber(60);
