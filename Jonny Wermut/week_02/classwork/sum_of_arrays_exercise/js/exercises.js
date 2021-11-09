// # Sum of arrays
// Write a function that receives two arguments, both of which are Arrays and sums them. These arrays contain only numbers. 
// You don't know their length and they can contain both integers and floating point numbers.

// ## Example
// ```
//   [2, 6.4, 3] + [3, 3.6, 2] = 20
// ```

// # Bonus
// Create another version of the above function that can accept more than two arrays as the arguments (you don't know the specific number of arguments). Hint - look up 'The arguments object'.

// # Bonus bonus
// Create another version of the above function that can accept numbers, arrays or a combination of the two for any amount of arguments.

const sumOfArray = (arr) => {
  let sum = 0;
  for (let i=0; i<arr.length; i++) {
      sum += arr[i];
  }
  return sum;
}

const sumOfArrays = function (arr1, arr2) {
  let sum = 0;
  for (let i=0; i<arguments.length; i++) {
  sum += sumOfArray(arguments[i]);
  }
  return sum;
}

const sharray = [2, 6.4, 3];
const murray = [3, 3.6, 2];
const harray = [3, 3.6, 2, 83, 73.2];

console.log(sumOfArrays(sharray, murray, harray));