// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars',
// except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function(amount) {
  if (amount == 1000000) {
    console.log(`${amount} dollars (pinky)`);
  } else {
    console.log(`${amount} dollars`);
  }
}

DrEvil(10);
DrEvil(1000000);

// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings
// (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings
// are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
