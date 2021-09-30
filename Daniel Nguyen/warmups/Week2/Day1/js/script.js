// Create a function that will translate your input to Pig Latin!
// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched (it's fine to keep the space between punctuation marks and the word). Not case sensitive.
// E.g. if your input = "Pig Latin is cool !", your output should look like => "igPay atinLay siay oolcay !"

const pigLatin = function (input) {
  const pigIt = (word) => word.slice(1) + word[0] + 'ay';
  return input.split(' ')
              .map((word) => hasLetters(word) ? pigIt(word) : word)
              .join(' ');
}

// An array of A-Z and a-z
const alphabet = [];
for (let i = 0; i < 26; i++) {
  alphabet.push(String.fromCharCode(i + 65));   //  upper case A-Z
  alphabet.push(String.fromCharCode(i + 97));   //  lower case a-z
}

// Checks if a word contains a letter. Returns a boolean.
const hasLetters = function (word) {
  for (let letter of word) {
    if (alphabet.includes(letter)) return true;
  }
  return false;
}
