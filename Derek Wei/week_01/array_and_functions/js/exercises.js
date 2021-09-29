// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(maxOfTwoNumbers(1,4));
console.log(maxOfTwoNumbers(5,2));
console.log(maxOfTwoNumbers(3,3));
console.log(maxOfTwoNumbers(-2,-4));

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = (a, b, c) => {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(maxOfThree(1,1,1)); // (a = b = c)
console.log(maxOfThree(1,2,3)); // (a < b < c)
console.log(maxOfThree(1,3,2)); // (a < c < b)
console.log(maxOfThree(2,3,1)); // (c < a < b)
console.log(maxOfThree(3,2,1)); // (a > b > c)
console.log(maxOfThree(3,1,2)); // (a > c > b)
console.log(maxOfThree(2,1,3)); // (c > a > b)
console.log(maxOfThree(3,3,1)); // (a = b > c)
console.log(maxOfThree(1,3,3)); // (a < b = c)
console.log(maxOfThree(3,1,3)); // (a = c > b)
console.log(maxOfThree(1,1,3)); // (a = b < c)
console.log(maxOfThree(3,1,1)); // (a > b = c)
console.log(maxOfThree(1,3,1)); // (a = c < b)

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isVowel = (character) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (j = 0; j < vowels.length; j++) {
      if (typeof character === 'string' && character.toLowerCase() === vowels[j]) { // to confirm argument is a string and checks string is equal to
        return true;
      }
    }
  return false;
}

console.log(isVowel('a'));
console.log(isVowel('e'));
console.log(isVowel('i'));
console.log(isVowel('o'));
console.log(isVowel('u'));
console.log(isVowel('A'));
console.log(isVowel('E'));
console.log(isVowel('I'));
console.log(isVowel('O'));
console.log(isVowel('U'));
console.log(isVowel('b'));
console.log(isVowel('B'));
console.log(isVowel('bag'));
console.log(isVowel('Agatha'));
console.log(isVowel(1)); // when creating these functions, is it necessary to check for argument type?

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = (arr) => {
  let result = 0;
  for (i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

console.log(sumArray([1,2,3,4]));
console.log(sumArray([1000,300,50,9]));
console.log(sumArray([1,222,54,24,13,3]));
console.log(sumArray([2,5]));

const multiplyArray = (arr) => {
  let result = 1;
  for (i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}

console.log(multiplyArray([1,2,3,4]));
console.log(multiplyArray([12,12,4,9]));
console.log(multiplyArray([1,2,21,232,3,4,41,5,2,22,3]));
console.log(multiplyArray([2,5]));

// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = (string) => {
  let reverse = "";
  for (i = 1; i <= string.length; i++) {
    reverse += string[string.length - i];
  }
  return reverse;
}

console.log(reverseString("hello"));
console.log(reverseString("123456 doodling"));
console.log(reverseString("How's it going my friend?"));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = (arr) => {
  let longest = arr[0].length;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > longest){
      longest = arr[i].length;
    }
  }
  return longest;
}


console.log(findLongestWord(["fire","dog","rate","yo"]));
console.log(findLongestWord(["fire","dog","rate","yodelling"]));
console.log(findLongestWord(["firefighter","dog","rate","hello"]));
console.log(findLongestWord(["firefighter","dog","incomprehensibility","rate","yodelling"]));

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = (arr, num) => {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(filterLongWords(["firefighter","dog","incomprehensibility","rate","yodelling"], 2));
console.log(filterLongWords(["firefighter","dog","incomprehensibility","rate","yodelling"], 3));
console.log(filterLongWords(["firefighter","dog","incomprehensibility","rate","yodelling"], 4));
console.log(filterLongWords(["fire","dog","rate","yo"], 3));
console.log(filterLongWords(["fire","dog","rate","yo"], 1));
console.log(filterLongWords(["fire","dog","rate","yo"], 4));
