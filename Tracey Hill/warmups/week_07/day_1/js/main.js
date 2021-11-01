console.log("Monday Monday Monday")

// Arrays - Flatten and Reverse

// The goal of this exercise is to manipulate arrays by creating a function that can reverse an array and by creating a function that can flatten an array. Do not use any libraries to complete this task - write this stuff from scratch using standard JS methods and objects.

// Make two functions:
// - reverse
// - flatten


// reverse( [1, 2, 3, 4] );
// // => [ 4, 3, 2, 1 ]
// flatten( ["Hello", ["World", 42] ] );
// // => [ "Hello", "World", 42 ]

// -----------------------------
// You only need to make flatten work to one level deep! You should be able to flatten this - ["Hello", ["World"]] - but not this - ["Hello", [[["World"]]]]

// -----------------------------
// Bonus
// Make one that flattens any array that you pass into it: ["Hello", [[["World"], 42]]] -> [ "Hello", "World", 42 ]



const numberReverse6 = (a) => {
 
  let reversedArray = a;
 
  reversedArray.reverse();
  console.log('reversed:', reversedArray);
 
  return reversedArray;
}

function numberReverse5(a) {
  
  let reversedArray = a;
  
  reversedArray.reverse();
  console.log('reversed:', reversedArray);

  return reversedArray;
}

numberReverse5([1, 2, 3, 4, 5])
numberReverse6([1, 2, 3, 4, 5])

const flatten6 = (a) => {
 
  let flatArray = a;
 
  flatArray.flat();
  console.log(`flattened: ${ flatArray }`);
 
  return flatArray;
}

function flatten5(a) {
  
  let flatArray = a;
 
  flatArray.flat();
  console.log(`flattened: ${ flatArray }`);
 
  return flatArray;
}

flatten5( ["Hello", ["World" , 42] ] );
flatten6( ["Hello", ["World" , 42] ] );



const reverse = function(a) {
  let reversedArray = []

  for (let i = a.length -1; i >=0; i-- ) {
    reversedArray.push(a[i]);
  }

  return reversedArray;

}

console.log(reverse([1, 2, 3, 4]))


const flatten = function(a) {
  let flattenedArray = [];

  a.forEach(
    function(threeD){
      if(Array.isArray(threeD)) {
          threeD.forEach(function(threeD){
            flattenedArray.push(threeD);
          })
      } else {
          flattenedArray.push(threeD);
        }
      });
      return flattenedArray;
    };
  
    console.log(flatten([1, 2, [3, 4]]))