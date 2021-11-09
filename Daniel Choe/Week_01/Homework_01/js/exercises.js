// The Calculator Homework
// Part 1
//
// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.

// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

const squareNumber = function (number) {
  square = number * number;
  result = `The result of squaring the number ${ number } is ${ square }.`;
  console.log(result);
};

const halfNumber = function (number) {
  half = number / 2;
  result = `Half of ${ number } is ${ half }`;
  console.log(result);
};

const percentOf = function (a,b) {
  calc = (a / b) * 100;
  result = `${ a } is ${ calc }% of ${ b }.`;
  console.log(result);
};

const areaOfCircle = function (radius) {
  area = Math.PI * radius * radius;
  area = area.toFixed(2);
  result = `The area for a circle with radius ${ radius } is ${ area }.`;
  console.log(result);
};

// Part 2
// # Strings
//
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// ## DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```
//
// ## MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```
//
// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```
//
// ## Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```
//
// ## Not Bad
//
// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
//
// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```

const megaFunction = function(number) {
  resultHalf = number / 2;
  resultSquare = resultHalf * resultHalf;
  resultSquareRound = Math.round(resultSquare);
  resultArea = Math.PI * resultSquare * resultSquare;
  resultAreaRound = Math.round(resultArea);
  resultA = `The area of the circle is ${ resultAreaRound }`;
  console.log(resultA);
  resultPercent = (resultArea / resultSquare) * 100;
  resultPercentRound = Math.round(resultPercent);
  resultB = `${ resultAreaRound } is ${ resultPercentRound }% of ${ resultSquareRound }.`;
  console.log(resultB);
};

// Strings Homework

const drEvil = function (amount) {
  if (amount >= 1000000) {
    result = `${ amount } dollars (pinky).`;
    console.log(result);
  }
  else {
    result = `${ amount } dollars.`;
    console.log(result);
  };
};

const mixUp = function (str1, str2) {
  a = str1;
  b = str2;
  result = b.slice(0,2) + a.slice(2) + " " + a.slice(0,2) + b.slice(2);
  console.log(result);
};

// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string,
//and return a version where all occurences of its first character have been replaced with '*',
//except for the first character itself. You can assume that the string is at least one character long.
//For example:
// ```
// fixStart('babble'): 'ba**le'
// ```
// slice() split() join()

const fixStart = function (a) {
  const char = a.charAt(0);
  //console.log(char);
  return char + a.slice(1).split(char).join("*");
}
//replaceall
console.log(fixStart('babble'));
