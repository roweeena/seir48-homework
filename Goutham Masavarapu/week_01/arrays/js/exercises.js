// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them.
const maxOfTwoNumbers = function (num1, num2) {
  // Use the if-then-else construct available in Javascript. You'll have to remember your pre-work,
  // or do some googling to figure this out.

  if(num1 > num2){
    // comparison of the numbers
    return `${num1} is greater than ${num2}`;
  } else {
    return `${num2} is greater than ${num1}`;
  }
};

console.log(maxOfTwoNumbers(23,29));


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (n1, n2, n3) {
  // 1>2 then check 2 is > 3 or not
  if (n1 > n2)
  {
    max = n1;
  } else
  {
    max = n2;
  }
  if (n3 > max)
  {
    max = n3;
  }
  return max;
}

console.log(maxOfThree(2,6,9));


// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel,
// false otherwise.

const character = function (ch) {
     const vowel = ["a","e","i","o","u"];//make an Array
     for(i =0 ;i <vowel.length ; i++){// for loop
       if(ch === vowel[i]){
         return `true`;
       }
       else {
         return false;
       }
     }
};

console.log(character('a'));
console.log(character('b'));



// 4. Define a function `sumArray` and a function `multiplyArray`
// that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
//
const sumArray = function (input) {
        output =0;
        for(i =0 ; i< input.length; i++){
           output += input[i];
        }
        return `${output}`;
};

console.log(sumArray([1,2,3,4]));


// function 2

const multiplyArray =function (input) {
  for(i =0 ; i< input.length; i++){
     output *= input[i];
  }
  return `${output}`;
};

console.log(multiplyArray([1,2,3,4]));
// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function (str) {

   // Step 1. Create an empty string that will host the new created string
   var newString = "";

   // Step 2. Create the FOR loop
 // The starting point of the loop will be (str.length - 1) which corresponds to the
 //      last character of the string, "o"
 //      As long as i is greater than or equals 0, the loop will go on
 //      We decrement i after each iteration
   for (var i = str.length - 1; i >= 0; i--) {
       newString += str[i]; // or newString = newString + str[i];
   }
   //  Here hello's length equals 5
   //     For each iteration: i = str.length - 1 and newString = newString + str[i]
   //     First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
   // End of the FOR Loop

   // Step 3. Return the reversed string
   return newString; // "olleh"
}

console.log(reverseString('hello'));


// 6. Write a function `findLongestWord` that takes an array of words and
// returns the length of the longest one.

const findLongestWord =function (array) {

     let longVaraible = " ";
     for( i =0 ; i <array.length ; i++){
       if(array[i].length > longVaraible.length){
         longVaraible = array[i];
       }
     }
     return longVaraible;
};

console.log(findLongestWord(["The","jump", "is", "more", "than", "expected"]));

// function findLongestWord(str) {
//   // Step 1. Split the string into an array of strings
//   const strSplit = str.split(' ');
//   // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
//   // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
//
//   // Step 2. Sort the elements in the array
//   const longestWord = strSplit.sort(function(a, b) {
//     return b.length - a.length;
//   });
//   /* Sorting process
//     a           b            b.length     a.length     var longestWord
//   "The"      "quick"            5            3         ["quick", "The"]
//   "quick"    "brown"            5            5         ["quick", "brown", "The"]
//   "brown"    "fox"              3            5         ["quick", "brown", "The", "fox"]
//   "fox"      "jumped"           6            3         ["jumped", quick", "brown", "The", "fox"]
//   "jumped"   "over"             4            6         ["jumped", quick", "brown", "over", "The", "fox"]
//   "over"     "the"              3            4         ["jumped", quick", "brown", "over", "The", "fox", "the"]
//   "the"      "lazy"             4            3         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the"]
//   "lazy"     "dog"              3            4         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the", "dog"]
//   */
//
//   // Step 3. Return the length of the first element of the array
//   return longestWord[0].length; // var longestWord = ["jumped", "quick", "brown", "over", "lazy", "The", "fox", "the", "dog"];
//                                 // longestWord[0]="jumped" => jumped".length => 6
// }
//
// findLongestWord("The quick brown fox jumped over the lazy dog");



// 7. Write a function `filterLongWords` that takes an array of words
// and an number `i` and returns the array of words that are longer than i.
const filterLongWords = function (array, i) {
      let longestWords = [];
      for(i =0; i< array.length;i++){
        if(array[i].length> i){
          longestWords = array[i];
        }
      }
      return longestWords;
};

console.log(filterLongWords(["bum", "cram", "jam", "rise", "titanic"]));
