console.log(`Warmup five week 2`);

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

// Write a function called mumble that accepts a single string argument:

// const mumble = function(a){
//   let result =[];
//
//     for (let i = 0; i < a.length; i++){
//       result.push(a[i].repeat(i+1));
//
//       }
//     return result.join(`-`);
// }
// console.log(mumble(`abc`));
////////BONUUS

const mumble = function(s){
  let letters = s.toLowerCase().split(``);
  console.log(letters);
      for (let i = 0; i < letters.length; i++){
        console.log(letters[i].toUpperCase());
        console.log(letters[i].repeat());
        letters[i] = letters[i].toUpperCase() + letters[i].repeat(i);
        console.log(letters[i]);
      }
      return leters.join(`-`);
}
console.log(mumble(`abc`));





// MY VERSION NOT WORKING !!!!!!!!!


// const mumble = function(a){
//   for (let i = 0; i < a.length; i++){
//       const res = a[i].split(`-`);
//         console.log(res);
//
//       }
//       console.log(res);
// }
// mumble(11111);
