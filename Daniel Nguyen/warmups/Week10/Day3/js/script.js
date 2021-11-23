const isIsogram = (str) => { // 'Mississippi'
  const charCount = _(str.split('')).countBy(); // { M: 1, i: 4, s: 4, p: 2 }
  const charCountArray = Object.values(charCount); // [ 1, 4, 4, 2 ]
  return charCountArray.every((n) => n === 1); // boolean
};

const TEST_isIsogram = function () {
  const testStrings = [ "Dermatoglyphics", "isogram", "aba", "moOse", "isIsogram", "" ];
  return testStrings.map((test) => {
    return { test: test, passed: isIsogram(test) };
  })
};

console.table( TEST_isIsogram() );
