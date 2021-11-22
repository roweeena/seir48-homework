// const pairwise = function (arr, n) {
//   const sums = {
//     // sum: [ indices ],
//   };
//
//   for (let a = 0; a < arr.length; a++) {
//     for (let b = 0; b < arr.length; b++) {
//       const sum = {
//         [`${a}-${b}`]: arr[a] + arr[b]
//       };
//       if (sum in sums) {
//         if (!(`${b}-${a}` in sums[sum])) {
//           sums[sum].push([a, b]);
//         }
//       } else {
//         sums[sum] = [[a, b]];
//       }
//     }
//   }
//
//   if (sums[n]) {
//     return _(sums[n]).flatten().reduce((a, b) => a + b);
//   } else {
//     return 0;
//   }
// };

const pairwise = function (arr, n) {
  const indexList = [] // stores pairs ofindices where the pairs sum to `n`

  arr.forEach((element, index) => {
    // console.log(element, index);

    const value = n - element;

    const indexNum = arr.indexOf(value);

    // console.log(element, index, value, indexNum);

    if (indexNum >= 0) {
      if (!indexList.includes(indexNum) && !indexList.includes(index)) {
        indexList.push(index, indexNum);
      }
    }
  });

  return indexList.reduce((a, b) => a + b);
}

console.log( pairwise( [ 7, 9, 11, 13, 15 ], 20 ) );

const TEST_pairwise = function () {
  const tests = [
    {
      testArr: [ 7, 9, 11, 13, 15 ],
      testSum: 20,
      expect: 6,
      result: null,
      passed: false
    },
    {
      testArr: [ 1, 6, 12, -2, 0, 7, 9, 9 ],
      testSum: 10,
      expect: 11,
      result: null,
      passed: false
    }
  ];

  _(tests).each(function (i) {
    i.result = pairwise(i.testArr, i.testSum),
    i.passed = pairwise(i.testArr, i.testSum) === i.expect
  });

  console.table(tests);
};

TEST_pairwise();
