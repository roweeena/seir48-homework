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
    helper(i + 1);
  };

  helper(index);
  return max;
};

const factorial = function (n) {
  if (n < 0) return; // negative numbers should return undefined
  else if (n <= 1) return 1; // 0! and 1! should equal 1; no need to continue.

  let factorial = 1;

  const helper = function (i) {
    if (i > n) return;
    factorial *= i;
    helper(i + 1);
  };

  helper(1);
  return factorial;
};

const fibonacci = function (n) {
  let fibonacci = [0, 1];
  if (n <= 1) return fibonacci[n];

  const helper = function (i) {
    if (i > n) return;
    const next = fibonacci[i-2] + fibonacci[i-1];
    fibonacci.push(next);
    helper(i + 1);
  };

  helper(2);
  return fibonacci[n];
};

function coinFlips(){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
