// # Mumble
// Write a function called mumble that accepts a single string argument:
//  - The function should return a string that has each character repeated the number of times according to its position 
// within the string argument.
//  Additionally, each repeated section of characters should be separated by a hyphen (-).

// Examples describe it best:
//  ```javascript
//  mumble('X'); //=> 'X'
//  mumble('abc'); //=> 'a-bb-ccc'
//  mumble('121'); //=> '1-22-111'
//  mumble('!A 2'); //=> '!-AA-   -2222'
// ```

// ## Bonus
// Capitalise the first character e.g. mumble('abc'); //=> 'A-Bb-Ccc'

const mumble = (str) => {
  let result = '';
  for (let i=0; i<str.length; i++) { //so long as i is less than 3 keep running 
    let position = i + 1; // set position to i + 1
    letter = str[i]; // set letter to the result of str[i]. In case of 'abc' when i = 0 then letter is 'a. when i is 1, then letter is 'b'
    result += letter.repeat(i+1); // add that letter to the result string.
  }
  return result;
}

// const mumble = (str) => {
//   let result = '';
//   for (let i=0; i<str.length; i++) { //so long as i is less than 3 keep running 
//     let position = i + 1; // set position to i + 1
//     for (let p=0; p<position; p++) { // iterate through the position. So if a letter is in position 1, the for loop will run once. if a letter is in position 2 the for loop will run twice
//       letter = str[i]; // set letter to the result of str[i]. In case of 'abc' when i = 0 then letter is 'a. when i is 1, then letter is 'b'
//       result += letter; // add that letter to the result string.
//     }
//     if(i !== str.length -1) {
//     result += '-';
//     }
//   }
//   return result;
// }