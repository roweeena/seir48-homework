// # Sum of arrays
// Write a function that receives two arguments, both of which are Arrays and sums them. These arrays contain only numbers. You don't know their length and they can contain both integers and floating point numbers.

// ## Example
// ```
//   [2, 6.4, 3] + [3, 3.6, 2] = 20
// ```


const sum = function (array1, array2) {
  let result = 0;

  // loop through each array and add up each number to the result
  array1.forEach(num => {
    result += num;
  })

  array2.forEach(num => {
    result += num
  })

  return result
}

console.log(sum([123, 12], [14, 12]));

// # Bonus
// Create another version of the above function that can accept more than two arrays as the arguments (you don't know the specific number of arguments).


const sumMultiple = function() {
  let result = 0;
  console.log(arguments);

  for (let i = 0; i < arguments.length; i++) {
    const array = arguments[i];

    for (let j = 0; j < array.length; j++) {
      result += array[j];
    }
  }

  return result;
}
console.log(sum([123, 12], [34, 21], [14, 12]));


// # Bonus Bonus
// Dan N's solution using reduce:

const sumOf = function () {
  let sum = 0;
  for (let arg of arguments) {
    sum += Number(arg) || arg.reduce((a,b) => a + b);
  }
  return sum;
}
console.log(sumOf([123, 12], 3421, [14, 12]));



// # Bonus Bonus
//Solution using an if statement

const sumAnything = function() {
  let result = 0;
  console.log(arguments);

  for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])){
      const array = arguments[i];

      for (let j = 0; j < array.length; j++) {
        result += array[j];
      }
    } else{
      result += arguments[i];
    }

  }

  return result;
}


console.log(sumAnything([123, 12], 3421, [14, 12]));
