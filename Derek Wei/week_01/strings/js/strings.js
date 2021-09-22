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

const DrEvil = (i) => {

  let result;
    if (i === 1000000) {
      result = `${i} dollars (pinky)`;
    }   else {
      result = `${i} dollars`;
    }
  console.log(result)
  return result;
}

DrEvil(10);
DrEvil(999999);
DrEvil(1000000);
DrEvil(1000000.1);

// ## MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```

const mixUp = (str1, str2) => {

  const str1Edit = str2.slice(0,2) + str1.slice(2);
  const str2Edit = str1.slice(0,2) + str2.slice(2);
  const result = `${str1Edit} ${str2Edit}`;
  console.log(result);
  return result;

}

mixUp('dog','dinner');
mixUp('mix','pod');
mixUp('waterboy','engineer');

// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```

const fixStart = (str) => {

  const strFirstLetterRemoved= str.slice(1);
  const strAsterisk = strFirstLetterRemoved.replaceAll(str[0], '*');
  const result = `${str[0]}${strAsterisk}`
  console.log(result);
  return result;

}

fixStart("babble");
fixStart("anagram");

//how to create same function where upper and lower case don't matter? may need regex for this
//fixStart("Babble");
//fixStart("baBble");

// ## Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```

const verbing = (str) => {

  if (str.length >= 3) {
    if (str.endsWith("ing")) {
      str = str.concat("ly");
    } else {
      str = str.concat("ing");
    }
  }
  console.log(str);
  return str;
}

verbing("box");
verbing("pop");
verbing("squash");
verbing("go");

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

//using the regular expression /not.*bad/ - the . represents any character and the * represents the previous token as many times as needed
//if the string does not contain "not" and "bad" in that order, the string will remain the same

const notBad = (str) => {

  str = str.replace(/not.*bad/, "good");
  console.log(str);
  return str;
}

notBad("That was not too bad.");
notBad("That was not what I expected.");
notBad("That was bad, not.");
notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');
