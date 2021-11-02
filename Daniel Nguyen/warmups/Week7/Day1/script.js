const reverse = function (array) {
  // reversedArray = [];
  // while (array.length > 0) {
  //   reversedArray.push( array.pop() );
  // }
  // return reversedArray;

  return array.reverse();
}

console.log(
  reverse(
    [1, 2, 3, 4]
  )
);

const flatten = function (array) {
  // // Basic flatten; one level deep.
  // flattenedArray = [];
  // while (array.length > 0) {
  //   flattenedArray.push( array.shift() )
  // }
  // return flattenedArray;

  // // Doesn't account for ',' as an element
  // return array.join().split(',');

  // Correct version (incomplete)
  flattenedArray = [];
  while (array.length > 0) {
    if (typeof array[0] === 'object') {
      flattenedArray.push('object');
      array.shift();
    } else {
      flattenedArray.push( array.shift() )
    }
  }
  return flattenedArray;
}


console.log(
  flatten(
    ["Hello", ["World", 42] ]
  )
);

console.log(
  flatten(
    ["Hello", [[["World"]]]]
  )
);

console.log(
  flatten(
    ["Hello", [',' [[[["World"]]]], "!"]]
  )
);
