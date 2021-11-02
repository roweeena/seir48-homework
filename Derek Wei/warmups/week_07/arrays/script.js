// Arrays - Flatten and Reverse
//
// The goal of this exercise is to manipulate arrays by creating a function that can reverse an array and by creating a function that can flatten an array. Do not use any libraries to complete this task - write this stuff from scratch using standard JS methods and objects.
//
// Make two functions:
// - reverse
// - flatten
//
//
// reverse( [1, 2, 3, 4] );
// // => [ 4, 3, 2, 1 ]
// flatten( ["Hello", ["World", 42] ] );
// // => [ "Hello", "World", 42 ]
//
// -----------------------------
// You only need to make flatten work to one level deep! You should be able to flatten this - ["Hello", ["World"]] - but not this - ["Hello", [[["World"]]]]
//
// -----------------------------
// Bonus
// Make one that flattens any array that you pass into it: ["Hello", [[["World"], 42]]] -> [ "Hello", "World", 42 ]


const reverse = function(arr) {

  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i])
  }

  return result;
}

console.log(reverse( [1, 2, 3, 4] ));
console.log(reverse( [10, 20, 40, 80] ));


const flatten = function(arr) {

  let result = [];

  arr.forEach(
    function(e) {
      console.log('Element: ' + e)

      if (Array.isArray(e)) {
        e.forEach(
          function(e) {
            result.push(e)
          }
        )
      } else {
        result.push(e)
      }
    }
  )

  return result;
}

console.log(flatten( ["Hello", ["World", 42] ] ));
console.log(flatten( [100, [32, 42, 2] ] ));
