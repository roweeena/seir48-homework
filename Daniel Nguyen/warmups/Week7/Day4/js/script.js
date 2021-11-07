const recurringLetter = function (string) {
  // Removes all spaces (' ') from the string for counting purposes.
  string = string.replaceAll(' ', '');

  // Returns an object with a count of each character.
  const charCount = _(string).countBy();

  // Returns an array of the most recurring letters in the string
  let maxLetters = [];
  _(charCount).each(function (count, char) {
    if (count === _(charCount).max()) {
      maxLetters.push(char);
    }
  });

  return maxLetters;
};

const TEST_recurringLetter = function () {
  const testString = 'just a simple sentence chilling';
  const expectation = ['e'];
  const result = recurringLetter(testString);
  const passed = result[0] === expectation[0] && result.length === 1;

  console.log('testing:', recurringLetter);
  console.log('argument:', testString);
  console.log('expectation: ', expectation);
  console.log('result: ', result);
  console.log('passed: ', passed);
}

TEST_recurringLetter();

console.log();

const capitaliseLetter = function (string, charToCapitalise) {
  return _(string).map(function (char) {
    return char === charToCapitalise ? char.toUpperCase() : char;
  }).join('');
};

const TEST_capitaliseLetter = function () {
  const testString = 'just a simple sentence chilling';
  const testCharToCapitalise = 'e';
  const expectation = 'just a simplE sEntEncE chilling';
  const result = capitaliseLetter(testString, testCharToCapitalise);
  const passed = result === expectation;

  console.log('testing:', capitaliseLetter);
  console.log('argument:', testString);
  console.log('expectation: ', expectation);
  console.log('result: ', result);
  console.log('passed: ', passed);
}

TEST_capitaliseLetter();
