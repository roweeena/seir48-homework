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
const DrEvil = function( amount ) {
  if ( amount === 1000000) {
    return `${ amount } dollars (pinky)`;
  }
  return `${ amount } dollars`;
};

//
// ## MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```
const mixUp = function( str1, str2 ) {

  const str1Edit = str2.slice( 0, 2 ) + str1.slice(2);
  const str2Edit = str1.slice( 0, 2 ) + str2.slice(2);
  return `${str1Edit} ${str2Edit}`;
};
// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```

const fixStart = function( str ) {
  const charToReplace = str[0],
  strArr = str.split('');

  for ( let i = 1; i < strArr.length; i++ ) {
    if (strArr[i] === charToReplace) {
      strArr[i] = '*';
    }
  }
   return strArr.join('');
};


// ## Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```
const verbing = function( str ) {
  if ( str.length >= 3 ) {

    if ( str.substring( str.length - 3 ) === 'ing') {
      return str += 'ly';
    } else {
      return str += 'ing';
    }
  }
  return str;
}



// ## Not Bad
//
// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

const notBad = function ( str ) {
  if (str.includes('not') && str.includes('bad')) {
    if (str.indexOf('not') < str.indexOf('bad')) { //if 'bad' follows the 'not'
      const newStr = str.replace(/(not).*(bad)/, 'good');
      return newStr
    }
  }return str;
}
