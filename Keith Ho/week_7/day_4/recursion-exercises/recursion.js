// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr, index = 0, max = arr[0]){
    // This function returns the largest number in a given array.
  if (index === arr.length){
    return max;
  }

  if (arr[index] < arr [index + 1]){
    if (arr[index + 1] < max) {
      max = max;
    } else {
      max = arr[index + 1];
    }
  } else if (arr[index] > arr [index + 1]) {
    if (arr[index] < max) {
      max = max;
    } else {
      max = arr[index];
    }
  }

  return findMax(arr, index + 1, max);
}
findMax([3,4,2,1,2]);
findMax([-1, -4, -2]);

function factorial(num, i = 1, result = 1){
    // This function returns the factorial of a given number.
  if (i === num) {
    return result;
  }
  result = (i + 1) * result;

  return factorial(num, i + 1, result);
}
factorial(3);
factorial(5);

let arr  = [1, 1];
function fibonacci(num, i = 3, result = 0){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
  if (num === 1 || num === 2){
    return 1;
  }

  if (i > num){
    return result;
  }
  result = arr[i - 2] + arr[i - 3];
  arr.push(result);

  return fibonacci(num, i + 1, result);
}
fibonacci(1);
fibonacci(2);
fibonacci(3);
fibonacci(4);

function coinFlips(n){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    // Helper recursive function
  function addFlips(n, result, current) {
    if (n === 1) {
        // This is the last flip, so add the result to the array
        result.push(current + 'H');
        result.push(current + 'T');
    } else {
        // Let's say current is TTH (next combos are TTHH and TTHT)
        // Then for each of the 2 combos call add Flips again to get the next flips.
        addFlips(n - 1, result, current + 'H');
        addFlips(n - 1, result, current + 'T');
    }
  }
// Begin with empty results
  let result = [];
// Current starts with empty string
  addFlips(n, result, "");
  return result;
}
coinFlips(2);
coinFlips(4);

function letterCombinations(arr){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
    let result = [];
    for(let i = 0; i < arr.length; i ++){
      result.push(arr[i]);
      for(let n = 0; n < arr.length; n ++){
        if(i !== n){
          result.push(arr[i]+arr[n]);
        }
        for(let b =0; b < arr.length; b ++){
          if (i !== n && i !== b && b !== n){
            result.push(arr[i]+arr[n]+arr[b]);
          }
        }
      }
    }
    return result;
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
