// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(array){
    n=1
    if(array[0] < array[n]) {
    return array[n]
  }else {
    return array[0];
  }
    return findMax(array[n-1])
}
findMax([3,4,2,1,2]);

function factorial(num){
    if(num===1) return 1
    return num * factorial(num-1)

}
factorial(5);

function fibonacci(num){
  if(num===1) return 1;
  if(num===0) return 0;
 return fibonacci(num-1) + fibonacci(num-2)


    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1



}
fibonacci(3)

function coinFlips(num){
    result = [];
    head = 'H';
    tails = 'T';
    function calculate(input) {
      if(input = 0){
        return;
      }
      if(num === 2) {
        string.length = num;
        string = head + tails

      }

    }
    calculate(num)
    return result;
}
    return coinFlips(2)


    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
}
coinFlips(2)

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
