// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr){
  // This function returns the largest number in a given array.
  let index = 0;
  let max = arr[index];

  function maxR(){
    if (index === arr.length) {
      return max;
    }
    if (max < arr[index]) {
      max = arr[index];
    }
    index++;
    return maxR();
  }
  return maxR();
}

function factorial(n){
  // This function returns the factorial of a given number.
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}


function fibonacci(n){
  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1
  if (n <= 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function coinFlips(n){
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"

  let outcomes = ['H', 'T'];

  function coinR(n) {
    if (n <= 1) {
      return outcomes;
    }
    let arrH = outcomes.map(f => f + 'H');
    let arrT = outcomes.map(f => f + 'T');
    outcomes = arrH.concat(arrT);
    return coinR(n - 1)
  }
  return coinR(n);
}

function letterCombinations(letters){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]

    if (letters.length <= 1) {
      return letters;
    }

    let result = [];

    for (let i = 0; i < letters.length; i++) {

      const currentLetter = letters[i];
      const remainingLetters = letters.slice(0, i) + letters.slice(i + 1);

      for (let j = 0; j < remainingLetters.length; j++) {
        result.push(currentLetter + letterCombinations(remainingLetters)[j]);
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
