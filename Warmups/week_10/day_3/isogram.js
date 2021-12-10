// # Isogram Finder
//
// An isogram is a word which has no repeating characters anywhere in the word. For example the string "isogram" is an isogram, however the string "is isogram", is not an isogram (2 i's and 2 s's).
//
// - There must be no repeating letters anywhere in the string.
//
// - The strings are case insensitive. Different Cased letters are still counted.
//
// ```js
// isIsogram("Dermatoglyphics") // true
// isIsogram("isogram") // true
// isIsogram("aba") //false
// isIsogram("moOse") // false,
// isIsogram("isIsogram") // false
// isIsogram("") // true
// ```
// Write a program that when given a string will detect if the string is or is not an isogram. Shortest program wins.


//SOLUTION 1
// const isIsogram = function(str) {
//   str = str.toLowerCase();
//
//   //split the string into individual characters
//   let array = str.split('').slice().sort();
//
//   console.log(array);
//   //loop through it
//
//   for ( let i = 0; i < array.length; i++){
//     //if duplicate, return false
//     console.log(array[i], array[i + 1]);
//     if (array[i] === array[i + 1]) {
//       return false;
//     }
//   }
//
//   return true;
//
// }



//SOLUTION 2: the magic way

const isIsogram = function (word) {
  console.log(new Set(word.toLowerCase()).size);
  console.log(word.length);

  //Set returns unique values
  return new Set(word.toLowerCase()).size === word.length;
}

console.log(isIsogram("Dermatoglyphics"));// true
//console.log(isIsogram("isogram"));// true
//console.log(isIsogram("aba"));//false
//console.log(isIsogram("mOose"));// false
console.log(isIsogram("isIsogram"));//false
//console.log(isIsogram(""));//true
//console.log(isIsogram('to be or not to be')); //false
