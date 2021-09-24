// console.log("hello world");
//
//
// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and
//returns the largest of them. Use the if-then-else construct available in Javascript.
// You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1, num2){
  if(num1 > num2){
    return num1
  } else {
    return num2
  };
};

console.log(maxOfTwoNumbers(15, 27));

// 2. Define a function `maxOfThree` that takes three numbers as arguments and
//returns the largest of them.

const maxOfThree = function (num1, num2, num3){
  if (num1 > num2 && num1 > num3) {
    return num1
  } else if ( num2 > num3 ) {
    return num2
  } else {
    return num3
  }
}
console.log(maxOfThree(3,17,21));
console.log(maxOfThree(3,31,80));
console.log(maxOfThree(42,31,30));
console.log(maxOfThree(32,89,30));




// 3. Write a function that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, false otherwise.
const vowelFinder = function (x){
  if(x === 'a'){
    return true;
  } if(x === 'e'){
    return true;
  } if(x === 'i'){
      return true;
  } if(x === 'o'){
      return true;
  } if(x === 'u'){
      return true;
  } else {
    return false;
  }
};

console.log(vowelFinder('o'));


// 4. Define a function `sumArray` and a function `multiplyArray`
// that sums and multiplies (respectively) all the numbers in an array of numbers.
//For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.



const sumArray = function (addArray){
  let j = 0;
  for(let i = 0; i < addArray.length; i++) {
    j += addArray[i];
  } console.log(`${j}`);
}

sumArray([1,2,5,4]);

// const timesArray = [1, 2, 3, 4];
 const multiplyArray = function (timesArray){
   let j = 1;
   for(let i = 0; i < timesArray.length; i++) {
     j = j * timesArray[i];
   } console.log(`${j}`);
   }

   multiplyArray([1,2,3,4]);

// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example,
// reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (str) {
  let newString = "";
  for(let i = str.length - 1; i >= 0; i--){
    newString += str[i];
  }
  return newString;
}


console.log(reverseString('cat'));



// 6. Write a function `findLongestWord` that takes an array of words and returns
//the length of the longest one.

const findLongestWord = function (arr){

}



// 7. Write a function `filterLongWords` that takes an array of words and an number
// `i` and returns the array of words that are longer than i.


const filterLongWords = function (){

}
