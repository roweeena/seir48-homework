// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function(a,b){
  if ( a > b ) {
    console.log(`Number ${a} is bigger then number ${b}`);
  }else {
    console.log(`Number ${b} is bigger then number ${a}`);
  }
}
maxOfTwoNumbers(2,4);
maxOfTwoNumbers(4,2);
maxOfTwoNumbers(5,4);

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThreeNumbers = function(a,b,c){
  if ( a > b && a > c ){
    console.log(`Biggest number is ${a} and other numbers were ${b} and ${b}`);
  }else if ( b > a && b > c){
    console.log(`Biggest number is ${b} and other numbers were ${a} and ${c}`);
  }else if ( c > a && c > b) {
    console.log(`Biggest number is ${c} and other numbers were ${a} and ${b}`);
  }else if ( a === b && b === c ){
    console.log(`Numbers are aqual and they are ${a}, ${b} and ${c}`);
  }else{
    console.log(`Error entry, Please insert three numbers !!!!`);
  }
  }
  maxOfThreeNumbers(10, 20, 15);

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const char = function(i){
  if ( i === `vowel`) {
    console.log("True");
  }else{
    console.log("False");
  }
}
char();

//4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24
const multArray = function() {

  const array = [1, 2, 5, 7, 8, 10];
  const multiplyArray = [10, 22, 40, 2, 5, 10];
  let sum = 0;
  let sum1 = 0;
  let total;
for (let i =0; i < array.length; i++ ){
 sum += array[i];
}
for (let j = 0; j < multiplyArray.length; j++){
  sum1 = sum1 + multiplyArray[j];
}

total = sum + sum1;
console.log(`Sum of first array is ${sum}`);
console.log(`Sum of secound array is ${sum1}`);
console.log(`Sum of ${sum} and ${sum1} are ${total}`);
}

multArray();



// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseFunc = function(){
const reverseString = ("jag testar");
let reverseWord = "";
for (let i = reverseString.length - 1; i >=0; i--){
  reverseWord += reverseString[i];
}
console.log(reverseWord);
}
reverseFunc();

// console.log("Reversed str is:", reverseWord);

//6
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function (wordLongest){

  // wordLongest = "Ivan", "Veselinov", "Is", "Studying", "Programing";
// wordLongest = "";
let sumWords= "";
  for (let i=0 ; i < wordLongest.length; i++){
    if ( wordLongest[i].length > sumWords.length ){
     sumWords = wordLongest[i];
   }
  }
  console.log(sumWords);
}

findLongestWord(["Ivan","Veselinov","Is","Studying","Programming"]);

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
//

const filterLongWords = function (word){
      let number;
  let storage="";
  for (let i=0; i < word.length ; i++){
    if( word[i].length >= number ){
       storage = word[i];
       }console.log(storage[i]);
   }
}
filterLongWords([]);
