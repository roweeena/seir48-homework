const evenOddSums = function (array) {
  let evensSum = 0;
  let oddsSum = 0;
  array.forEach((n) => {
    if (n & 1) oddsSum += n;
    else evensSum += n;
  });
  return [ evensSum, oddsSum ];
}

const TEST_evenOddSums = function () {
  const testArray = [50, 60, 60, 45, 71];
  const expectation = [170, 116];
  const result = evenOddSums(testArray);
  const passed = result[0] === expectation[0] && result[1] === expectation[1];
  console.log(`Testing: fn evenOddSums( ${ testArray } )`);
  console.log('expectation: ', expectation);
  console.log('result: ', result);
  console.log('passed: ', passed);
}

TEST_evenOddSums();
