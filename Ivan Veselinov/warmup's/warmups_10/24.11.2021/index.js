// # Isogram Finder
//
// An isogram is a word which has no repeating characters anywhere in the word. For example the string "isogram" is an isogram, however the string "is isogram", is not an isogram (2 i's and 2 s's).
//
// - There must be no repeating letters anywhere in the string.
//
// - The strings are case insensitive. Different Cased letters are still counted.


              // My SOLUTION

const isIsogram = function(words){

console.log('You enter:',words);

let result = words.toLowerCase().split('').sort().join("").match(/(.)\1/);

  if ( result === null ){
      return true;
    }else{
      return false;
  }
}

console.log(isIsogram("Dermatoglyphics")) // true
console.log(isIsogram("isogram")) // true
console.log(isIsogram("aba")) //false
console.log(isIsogram("moOse")) // false,
console.log(isIsogram("isIsogram")) // false
console.log(isIsogram("")) // true

// ```
// Write a program that when given a string will detect if the string is or is not an isogram. Shortest program wins.
// ```js



          /// ROWENA SOLUTION
//
// const isoProgram = function(str){
//   str = str.toLowerCase();
//
//   let array = str.split('').slice(0).sort();
//   console.log(array);
//
// for (let i =0; i < array.length; i++){
//
// console.log('before IF condition',array[i] === array[i+1])
//   if ( array[i] === array[i+1] ) {
//     return false;
//   }else{
//     return true
//   }
// }
//
// }
//
// console.log(isoProgram("Dermatoglyphics")) // true
// console.log(isoProgram("isogram")) // true
// console.log(isoProgram("aba")) //false
// console.log(isoProgram("moOse")) // false,
// console.log(isoProgram("isIsogram")) // false
// console.log(isoProgram("")) // true




        // Rowena secound SOLUTION Magic Way but not working

// const isoProgram = function(word) {
//   console.log(new Set(word.toLowerCase()));
//   console.log(word.length);
//   return newSet(word.toLowerCase()).size === word.length;
// }

// console.log(isoProgram("Dermatoglyphics")) // true
// console.log(isoProgram("isogram")) // true
// console.log(isoProgram("aba")) //false
// console.log(isoProgram("moOse")) // false,
// console.log(isoProgram("isIsogram")) // false
// console.log(isoProgram("")) // true
