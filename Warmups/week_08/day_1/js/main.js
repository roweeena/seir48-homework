// # Pairwise
//
//  Write a function that accepts an array and a number, from the array find the element pairs whose sum equal to that number, and return the sum of their indices.
//
//  If there are multiple valid pairs that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.
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
// ```
// ## Bonus
//
// Find and return all the pairs of indices in the array when the sum is equal to a specific number.
//
// For example, pairwise([7, 9, 11, 13, 15], 20) returns:
//
// There is a pair at indices: [0, 3]
//
// There is a pair at indices: [1, 2]


const pairwise = function (array, num){
  const indexList = []; //array store the indices where the pair elements equal to the num argument

  //second part
  const pairs = [];

  array.forEach((element, index) => {
    //console.log(element,index);

    const value = num - element;

    const indexNum = array.indexOf(value) // get the index of the corresponding value;

    //console.log(`The ${num} subtracted from the ${element} is ${value} at index ${indexNum}`);

    if (indexNum >= 0) { //indexNum is -1 there is no corresponding value
      if (!indexList.includes(indexNum) && !indexList.includes(index)){ //takes of the duplicate indices
        indexList.push(index, indexNum);

        //console.log(indexList);
      }
    }
    //second part
    const secondArray = array.slice(index+1) //to compare the elements from the original array
    console.log(secondArray);
    secondArray.forEach((element2, index2)=>{
      console.log(element2, index2);
      if (element2 === value) { //once the loop finds where the element2 threequals value, push its indices as its own array into the pairs array
      //  console.log((index2+(index+1)));  //to get the index of the value e.g. the index of 13 in the original array, is index2 + index + 1
        pairs.push([index, (index2+(index+1))]) //
        //console.log(pairs);
      }
    })

    ///Explanation of (index2+(index+1))
    //Array1: [7, 9, 11, 13, 15]
    //Array2: [9, 11, 13, 15]

  })
  let sum = indexList.reduce((a, b) => a + b)
  //second part
  pairs.forEach((pair) => {
    console.log(`There is a pair of indices at ${pair}`);
  })
  return sum
}

console.log(pairwise([7, 9, 11, 13, 15], 20));
//console.log(pairwise([1, 6, 12, -2, 0, 7, 9, 9], 10));
