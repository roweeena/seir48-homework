// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

// This function returns the largest number in a given array.
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

// This function returns the factorial of a given number.
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

// This function returns the Nth number in the fibonacci sequence.
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

// This function returns an array of all possible outcomes from flipping a coin N times.
const coinFlips = function (n) {
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]

    let c = 0;
    let f = 0;
    let isHeads = true;

    const combos = Array(2**n).fill(
      Array(n).fill(null);
    );

    const recurPerCombo = function (c) {
      if (c === 2**n) return;


      recurPerCombo(c + 1);
    }
    recurPerCombo(0);

    console.log('n:', n, 'combos:', combos);
    return combos;
}

const recurPerPossibility = function (p, combos, n) {
  // Base case
  if (combos.length === 2 ** n) return combos;

  // Action
  const cumulativeCombos = combos;
  const currentCombo = p;
  cumulativeCombos.push(currentCombo);

  // Recursive case
  recurPerPossibility(p + 1, cumulativeCombos, n)
};

// This function returns an array of all combinations of the given letters
const letterCombinations = function (chars) {
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]

    const combos = [];

    const helper = function (i) {
      if (i == chars.length) {

      }
    }
    helper(0);


    console.log('chars:', chars, 'combos:', combos);
    return combos;
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
