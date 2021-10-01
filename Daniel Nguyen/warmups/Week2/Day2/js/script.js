// # Sum of arrays
// Write a function that receives two arguments, both of which are Arrays and sums them. These arrays contain only numbers. You don't know their length and they can contain both integers and floating point numbers.
//
// ## Example
// ```
//   [2, 6.4, 3] + [3, 3.6, 2] = 20
// ```
//
// # Bonus
// Create another version of the above function that can accept more than two arrays as the arguments (you don't know the specific number of arguments). Hint - look up 'The arguments object'.
//
// # Bonus bonus
// Create another version of the above function that can accept numbers, arrays or a combination of the two for any amount of arguments.

const sumOf = function () {
  let sum = 0;
  for (let arg of arguments) {
    sum += Number(arg) || arg.reduce((a,b) => a + b);
  }
  return sum;
}

const a = [2, 6.4, 3];
const b = [3, 3.6, 2];
const c = [4.1, 5, 0.9];
const d = 10;
const e = 5.5;

console.log( sumOf(a, b, c, d, e) );   // 45.5
