// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

// This function returns the largest number in a given array.
const findMax = function (arr, max=-Infinity) {
  // Base case
  if (arr.length === 0) return max;

  // Action
  if (arr[0] > max) {
    max = arr[0];
  }

  // Recursive case
  const rest = arr.slice(1);
  return findMax(rest, max);
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
  const combos = [];

  // Helper:
  const flip = function (soFar='') {
    if (soFar.length === n) {
      // Base case
      combos.push( soFar )
    } else {
      // Action
      flip(soFar + 'H');
      flip(soFar + 'T');
    }
  }

  // Recursive case
  flip();
  return combos;
};

// This function returns an array of all combinations of the given letters
const letterCombinations = function (chars) {
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
