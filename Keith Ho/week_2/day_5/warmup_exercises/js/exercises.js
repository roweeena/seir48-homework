console.log("working");

// # Mumble
// Write a function called mumble that accepts a single string argument:
//  - The function should return a string that has each character repeated the number of times according to its position within the string argument.
//  Additionally, each repeated section of characters should be separated by a hyphen (-).
//
// Examples describe it best:
//  ```javascript
//  mumble('X'); //=> 'X'
//  mumble('abc'); //=> 'a-bb-ccc'
//  mumble('121'); //=> '1-22-111'
//  mumble('!A 2'); //=> '!-AA-   -2222'
// ```
//

const mumble = function(str) {
  let newStrArr = [];
  let result = [];
  const strArr = str.split("");

  for (let i = 0; i < strArr.length; i++ ) {
    newStrArr = Array(i + 1).fill(strArr[i]);
    result.push(newStrArr.join(""));
  }

  return result.join("-");
}

// ## Bonus
// Capitalise the first character e.g. mumble('abc'); //=> 'A-Bb-Ccc'

const mumble2 = function(str) {
  let newStrArr = [];
  let result = [];
  let newResult = [];
  const strArr = str.split("");

  for ( let i = 0; i < strArr.length; i++ ) {
    newStrArr = Array(i + 1).fill(strArr[i]);
    let firstLetter = newStrArr[0].toUpperCase();
    let strArrWithoutFirstLetter = newStrArr.splice(1, newStrArr.length - 1 ).join("");
    result = firstLetter + strArrWithoutFirstLetter;
    newResult.push(result);
  }

   return newResult.join("-");
}

console.log(mumble("hello"));
console.log(mumble2("hello"));
