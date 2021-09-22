// # Strings

// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// ## DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```

const drEvil = (amount) => {
  if (amount === 1000000) {
    return `${amount} dollars (pinky)`
  }
  else {
    return `${amount} dollars`
  }
}

// ## MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```

const mixUp = (string1, string2) => {
  //grab the remaining letters of string 1
  let string1Suffix = string1.slice(2);
  //grab first 2 letters of string 2
  let string2Prefix = string2.slice(0,2);
  //concatenate first 2 letters of string 2 with remaining letters of string 1
  let newString1 = string2Prefix + string1Suffix

  //grab the remaining letters of string 2
  let string2Suffix = string2.slice(2);
  //grab first 2 letters of string 1
  let string1Prefix = string1.slice(0,2);
  //concatenate first 2 letters of string 1 with remaining letters of string 2
  let newString2 = string1Prefix + string2Suffix

  //concatenate newString1 and newString2
  return `${newString1} ${newString2}`;
}

// ## FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```
const fixStart = (string) => {
  let newWord = string[0];
  let firstLetter = string[0];
  for (i=1; i<string.length; i++) {
    if (string[i] !== firstLetter) {
        newWord = newWord + string[i];
    }
    else {
        newWord = newWord + '*';
    }
  }
return newWord;
}


// ## Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, 
// unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, 
// it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```

const verbing = (string) => {
  let output = '';
  if (string.length >= 3) {
    if (string.slice(-3) === 'ing') {
      output = string + 'ly';
    }
    else {
      output = string + 'ing';
    }
  else (string.length < 3) {
     output = string;
    }
  }
  return output;
}

// ## Not Bad

// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```