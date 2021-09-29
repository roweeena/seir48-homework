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

const sumArr = function(arr1, arr2) {
  let sum = 0;

  // for ( let i = 0; i < arr1.length; i++ ) {
  //   sum = sum + arr1[i];
  // }

  arr1.forEach( num => { sum += num});

  arr2.forEach( num => { sum += num});
  //
  // for ( let i = 0; i < arr2.length; i++ ) {
  //   sum = sum + arr2[i];
  // }

  return sum;
}

console.log(sumArr([1, 3.7, 5], [6, 7.2, 10]));

const sumArg = function() {
  let sum = 0;

  for ( let i = 0; i < arguments.length; i++ ) {
    if (Array.isArray(arguments[i])) {
      arguments[i].forEach( num => { sum += num});
    } else {
      sum = sum + arguments[i];
    }
  }

  return sum;
}

console.log(sumArg([1, 3.7, 5], [6, 7.2], 100, 1));
