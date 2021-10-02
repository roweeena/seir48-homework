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


const sumTwoArrays = (arr1, arr2) => {

  let result = 0;
  arr1.forEach(n => result += n);
  arr2.forEach(n => result += n);
  return result;
}

// test cases

test1 = [1, 2, 3, 4];
test2 = [5, 6, 7, 8];
test3 = [2, 6.4, 3];
test4 = [3, 3.6, 2];

console.log(sumTwoArrays(test1, test2)) // expected => 36
console.log(sumTwoArrays(test1, test3)) // expected => 21.4
console.log(sumTwoArrays(test3, test4)) // expected => 20
console.log(sumTwoArrays(test1, test4)) // expected => 18.6

// didn't read the question properly and ended up summing the corresponding indices in the arrays
//
// const sumTwoArrays = (arr1, arr2) => {
//
//   let result = [];
//   for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
//     result.push((arr1[i] || 0) + (arr2[i] || 0));
//   }
//   return result;
// }
//


// const sumManyArrays = function () {
//
//   let result = 0;
//
//   arguments.forEach( arguments[i].forEach(n => result += n) => result +=n);
//
//   return result;
// }
//
// console.log(sumManyArrays(test1, test2, test3, test4)) // expected => 56
