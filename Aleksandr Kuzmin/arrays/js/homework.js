// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
//
// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.


function maxOfTwoNumbers(num1, num2) {

  if( num1 > num2 ) {
    return num1;

  }if(num1 < num2){
    return num2;

  }
}
console.log(`${maxOfTwoNumbers(3,5)}`);
//////////////////////////////////////////////////

function maxOfThree(num1, num2, num3) {
  if(num1>num2 && num2 > num3){
    return num1;

  }
  else if(num2>num1 && num1 > num3){
    return num2;
  }else {
    return num3;
  }

}


console.log(`${maxOfThree(3,5,1)}`);


//////////////////////////////////////////

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.



function vowelChecker(str) {
const vowels = ["a", "e", "i", "o", "u"];
for(let vowel = 0; vowel < vowels.length; i++) {
  if (str == vowels[vowel]) {
    return true;
  }
  else {
    return false;
  }
}

}
console.log(`${vowelChecker("b")}`);


//4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

function sumArray(array) {
  for(let i = 0; i < array.length; i++){

  const x = array[i] + array[i+1] + array[i+2] + array[i+3];
    return x// array[o]+ ....
  }
}

console.log(`${sumArray([1,2,3,4])}`);

//function multiArray(array) {
function multiArray(array) {
  for(let i = 0; i < array.length; i++){

  const x = array[i] * array[i+1] * array[i+2] * array[i+3];
    return x// array[o]+ ....
  }
}

console.log(`${multiArray([1,2,3,4])}`);


//5. Define a function `reverseString` that computes the reversal of a string.
//For example, reverseString("jag testar") should return the string "ratset gaj".



function reverseString(string) {
   let x = " ";
  for(let i = string.length - 1; i >=0; i-- ) {

  x = x + string[i]// [" ", " ", " "].


  }
  return x; // return is not a part of the loop!!! it is a part of the function!!!
}
  console.log(`${reverseString("jag testar")}`);


  //6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

function findLongestWord (array) {

let longest = array[0];
  for(let i = 0; i < array.length; i ++ ) //

  if(longest.length > array[i].length){
    return longest;
  }
  if(longest[i].length < array[i].length){
  array[i] = longest;
  return longest;
}


}

console.log(`${findLongestWord(["look","up","there"])}`);
