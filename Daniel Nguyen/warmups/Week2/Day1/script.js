const pigLatin = function (string) {
  const pigIt = (word) => word.slice(1) + word[0] + 'ay';
  return string.split(' ')
              .map((word) => hasLetters(word) ? pigIt(word) : word)
              .join(' ');
}

// A global array of A-Z and a-z
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

const TEST_pigLatin = function () {
  const tests = ["Pig Latin is cool !"];
  for (let test of tests) {
    console.log(test, pigLatin(test));
  }
}

TEST_pigLatin();
