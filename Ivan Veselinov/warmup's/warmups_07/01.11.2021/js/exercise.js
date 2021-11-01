
// Arrays - Flatten and Reverse

// The goal of this exercise is to manipulate arrays by creating a function that can reverse an array and by creating a function that can flatten an array. Do not use any libraries to complete this task - write this stuff from scratch using standard JS methods and objects.
//
// Make two functions:
// - reverse
// - flatten

//flatten( ["Hello", ["World", 42] ] );
// -----------------------------
// You only need to make flatten work to one level deep! You should be able to flatten this - ["Hello", ["World"]] - but not this - ["Hello", [[["World"]]]]
//

// Bonus
// Make one that flattens any array that you pass into it: ["Hello", [[["World"], 42]]] -> [ "Hello", "World", 42 ]

// -----------------------------


// reverse( [1, 2, 3, 4] );
// => [ 4, 3, 2, 1 ]

console.log("Hello World");

array = [1, 2, 3, 4];

const reverse = function(){
  for (i = array.length - 1; i >= 0; i--){
  console.log(array[i]);
  }
}
reverse();

//
// // - flatten
// // // => [ "Hello", "World", 42 ]
// const flatten = function(){
//   console.log('Hello, World', array[3],array[1]);
// }
// flatten();




// PAT SOLUTION
// const reverse = function(array){
//   let reversedArray = [];
//
//   for(let i = array.legth; i >= 0 ; i--){
//     // console.log("I is equal to" i);
//     // console.log("I of array is" array[i]);
//     reversedArray.push(array[i]);
//   }
//   return reversedArray;
// }
// console.log(reverse([1,2,3,4]));


// FLAT !!!!
const flattern = function(array){
  let flatArray = [];

  array.forEach(
    function(element){
      console.log('Elements:' + element);
        if(Array.isArray(element)){
        let flattern = element.flat()
        flatArray.push(flattern);
      }else {
        flatArray.push(element);
      }
    });
    return flatArray;
}
console.log(flattern([1,2,3,[4,5]]));
