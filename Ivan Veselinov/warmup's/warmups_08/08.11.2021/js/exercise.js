// # Pairwise
//
// Write a function that accepts an array and a number, from the array find the element pairs whose sum equal to that number, and return the sum of their indices.
//
// If there are multiple valid pairs that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.
//
// For example:
// ```js
// pairwise([7, 9, 11, 13, 15], 20)
// // => return 6
// // The pairs that sum to 20 are [7, 13], [9, 11] at indices: 0, 3, 1, 2 (total: 6).
//
// // pairwise([1, 6, 12, -2, 0, 7, 9, 9], 10)
// // // => returns 11.
// // // The pairs that sum to 10 are [1, 9], [12, -2] at indices: 0, 6, 2, 3 (total: 11).


function parwise(arr, arg) {
  if (arr.length === 0){
    return 0;
  }

  let pairs = arr.reduce(function(accum, curr, index, array){
    for (let i = 0; i < array.length; i++){
      if (curr + array[i] === arg && index !== i){
        if (!accum.includes(index) && !accum.includes(i)){
          accum.push(index, i);
        }
      }
    }
    return accum;
  }, []);

  return pairs.reduce(function(x, el){
    return x + el;

  });

}

console.log(parwise([1,1,1], 2));
console.log(parwise([7, 9, 11, 13, 15], 20));
console.log(parwise([1, 6, 12, -2, 0, 7, 9, 9], 10));


// ROWENA

// const pairwise = function (array,num){
//   const indexList = []; // array store the indices where the pair elements are equal to num arg
//
// array.forEach((element,index) => {
//   // console.log(element,index);
//   const value = num - element;
//
//   const indexNum = array.indexOf(value)
//   console.log(`The ${sum} subtracted from the ${element} is ${value} at index ${index}`);
//
//   if ( indexNum >= 0 ) {
//     if (!indexList.includes(indexNum) && !indexList.includes(index));
//     indexList.push(index, indexNum);
//
//     // console.log(indexList);
//     }
//
//   });
//
//   let sum = indexList.reduce((a, b) => a + b);
//   return sum;
// }
// console.log(pairwise([1,1,1], 2));

// ## Bonus
//
// Find and return all the pairs of indices in the array when the sum is equal to a specific number.
//
// For example, pairwise([7, 9, 11, 13, 15], 20) returns:
//
// There is a pair at indices: [0, 3]
//
// There is a pair at indices: [1, 2]
//
// ## Bonus
//
// Find and return all the pairs of indices in the array when the sum is equal to a specific number.
//
// For example, pairwise([7, 9, 11, 13, 15], 20) returns:
//
// There is a pair at indices: [0, 3]
//
// There is a pair at indices: [1, 2]
