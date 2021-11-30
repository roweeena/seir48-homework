const _ = require('underscore');

const isIsogram = (str) => { // 'Mississippi'
  str = str.toLowerCase(); // 'mississippi'
  const charCount = _(str.split('')).countBy(); // { m: 1, i: 4, s: 4, p: 2 }
  const charCountArray = Object.values(charCount); // [ 1, 4, 4, 2 ]
  return charCountArray.every((n) => n === 1); // boolean
};

const TEST_isIsogram = function () {
  const tests = [
    { string: "Dermatoglyphics", expect: true },
    { string: "isogram", expect: true },
    { string: "aba", expect: false },
    { string: "moOse", expect: false, },
    { string: "isIsogram", expect: false },
    { string: "", expect: true }
  ];

  tests.forEach((t) => {
    const result = isIsogram(t.string) === t.expect ? 'passed' : 'failed';
    console.log( t.string, isIsogram(t.string), result);
  });
};

TEST_isIsogram();
