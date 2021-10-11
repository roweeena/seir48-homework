const mumble = function (string) {                                              // 'abc'
  const chars = string.split('');                                               // ['a', 'b', 'c']
  const repeated = chars.map((char, i) => char.repeat(i + 1));                   // ['a', 'bb', 'ccc']
  const capitalised = repeated.map(x => x[0].toUpperCase() + x.slice(1));        // ['A', 'Bb', 'Ccc']
  return capitalised.join('-');                                                 // 'Aa-Bb-Ccc'
}

const TEST_mumble = function () {
  // key: value === testString: expectedOutput
  const tests = {
    'X': 'X',
    'abc': 'A-Bb-Ccc',
    '121': '1-22-111',
    '!A 2': '!-AA-   -2222'
  };

  for (let test in tests) {
    console.log(
      test,                                 // string to be tested
      mumble(test),                         // its output
      testStrings[test] === mumble(test)    // did pass test? true || false
    );
  }
}

TEST_mumble();
