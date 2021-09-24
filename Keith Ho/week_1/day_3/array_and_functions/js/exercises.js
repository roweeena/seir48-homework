// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function(a, b) {
  if ( a > b ) {
    return a;
  } else {
    return b;
  }
}

console.log( maxOfTwoNumbers(5, 10) );

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function(a, b, c) {
  if ( a > b ) {
    if ( a > c ) {
      return a;
    } else {
      return c;
    }
  } else if ( a < b ) {
    if ( b > c ) {
      return b;
    } else {
      return c;
    }
  }
}

console.log( maxOfThree(5, 10, 20) );

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowel = function(char) {
  if ( char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ) {
    return true;
  } else {
    return false;
  }
}

console.log( vowel("u") );
console.log( vowel("b") );

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const numbers = [7, 18, 69, 100, 999];

const sumArray = function() {
  let sum = 0;

  for ( let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[ i ];
  }

  return sum;
}

console.log( sumArray() );

const multiplyArray = function() {
  let result = numbers[0];

  for ( let i = 1; i < numbers.length; i++) {
    result = result * numbers[ i ];
  }

  return result;
}

console.log( multiplyArray() );

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(a) {
  let result = "";

  for ( let i = a.length - 1; i >=0; i-- ) {
    result = result + a[i];
  }

  return result;

  // const splitString = a.split("");
  // const reverseArray = splitString.reverse();
  // // const joinArray = reverseArray.join("");
  //
  // return joinArray;
}

console.log( reverseString("Hello World!"));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const words = ["Antidisestablishmentarianism", "Floccinaucinihilipilification", "Beautiful", "sesquipedalianism", "Hi"];

const findLongestWord = function(a) {
  let longestWord = a[0] ;

  for ( let i = 0; i < a.length; i++) {
    if ( a[i].length > longestWord.length ) {
      longestWord = a[ i ];
    }
  }
  return longestWord;
}

console.log( findLongestWord(words) );

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = function(arr, i) {
  let result = [];

  for ( let n = 0; n<arr.length; n++ ) {
    if ( arr[n].length > i) {
      result.push(arr[n]);
    }
  }

    // const result = a.filter( word => word.length > i);

  return result;
}

console.log( filterLongWords(words, 20) );
