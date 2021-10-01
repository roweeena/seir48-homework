// # Mumble

// Write a function called mumble that accepts a single string argument:
//  - The function should return a string that has each character repeated the number of times according to its position within the string argument.
//  Additionally, each repeated section of characters should be separated by a hyphen (-).

// Examples describe it best:

//  mumble('X'); //=> 'X'
//  mumble('abc'); //=> 'a-bb-ccc'
//  mumble('121'); //=> '1-22-111'
//  mumble('!A 2'); //=> '!-AA-   -2222'


// ## Bonus
// Capitalise the first character e.g. mumble('abc'); //=> 'A-Bb-Ccc'

const mumble = function (string) {                                              // 'abc'
  const chars = string.split('');                                               // ['a', 'b', 'c']
  const nibbles = chars.map((char, i) => char.repeat(i + 1));                   // ['a', 'bb', 'ccc']
  const capitalised = nibbles.map(x => x[0].toUpperCase() + x.slice(1));        // ['A', 'Bb', 'Ccc']
  return capitalised.join('-');                                                 // 'Aa-Bb-Ccc'
}

const testStrings = {
  'X': 'X',
  'abc': 'A-Bb-Ccc',
  '121': '1-22-111',
  '!A 2': '!-AA-   -2222'
};

const TEST_mumble = function () {
  for (let test in testStrings) {
    console.log(
      test,
      mumble(test),
      testStrings[test] === mumble(test));
  }
}

TEST_mumble();
