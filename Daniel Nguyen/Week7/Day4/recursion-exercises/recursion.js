// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

const findMax = function (arr) {
  const index = 0;
  let max = arr[index];

  const helper = function (i) {
    if (i === arr.length) return;
    if (arr[i] > max) {
      max = arr[i];
    }
    // console.log(i, max, arr);
    helper(i + 1);
  };

  helper(index);
  // console.log('max', max);
  return max;
};

const factorial = function (n) {
  if (n < 0) return; // negative numbers should return undefined
  else if (n <= 1) return 1; // 0! and 1! should equal 1; no need to continue.

  let factorial = 1;

  const helper = function (i) {
    if (i > n) return;
    factorial *= i;
    // console.log(i, factorial);
    helper(i + 1);
  };

  helper(1);
  // console.log('factorial', factorial);
  return factorial;
};

const fibonacci = function (n) {
  const fibonacci = [0, 1];
  if (n <= 1) return fibonacci[n];

  const helper = function (i) {
    if (i > n) return;
    const next = fibonacci[i-2] + fibonacci[i-1];
    fibonacci.push(next);
    // console.log(`[${i}]:`, next);
    helper(i + 1);
  };

  helper(2);
  // console.log('nth:', fibonacci[n]);
  return fibonacci[n];
};

const coinFlips = function (n) {
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]

    const combos = [];

    // Parent helper: recurs n times
    const recurPerPossibility = function (f) {
      if (combos.length === n*n) return;

      let currentPossibility = '';


      // Child helper: recurs 2 times
      const recurPerFlip = function (p) {
        if (currentPossibility.length === n) return;

        // TODO: Do the thing
        currentPossibility += p;


        // Check if 'H' is required
        // Check if 'T' is required
        // All combos at once??
        // Another nested helper??


        recurPerFlip(p + 1);
      }

      recurPerFlip(0);
      combos.push(currentPossibility);
      recurPerPossibility(f + 1);
    }

    recurPerPossibility(0);
    console.log('n:', n, 'combos:', combos);
    return combos;
}

const letterCombinations = function (chars) {
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]

    const combos = [];

    // console.log('chars:', chars, 'combos:', combos);
    return combos;
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
