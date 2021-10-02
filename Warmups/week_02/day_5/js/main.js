console.log("It's Friday")

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
// ## Bonus
// Capitalise the first character e.g. mumble('abc'); //=> 'A-Bb-Ccc'


// const mumble = function(string){
//   let result = [];
//
//   for (let i = 0; i < string.length; i++){
//
//     //console.log(string[i]);
//     //console.log(string[i].repeat(i+1));
//     result.push(string[i].repeat(i+1))
//   }
//
//   return result.join('-')
// }



const mumble = function(s){
  let letters = s.toLowerCase().split('')
  console.log(letters)

  for (let i = 0; i < letters.length; i++){
    console.log(letters[i].toUpperCase());
    console.log(letters[i].repeat(i));
    letters[i] = letters[i].toUpperCase() + letters[i].repeat(i);
    console.log(letters[i])
  }
  return letters.join('-')
}
console.log(mumble('abc'));
console.log(mumble('121'));
console.log(mumble('!A 2'));
