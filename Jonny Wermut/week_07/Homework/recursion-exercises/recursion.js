// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

// [1,2]

function findMax(arr, index = 0, max = arr[index]){
    if (index === arr.length) {
        return max
    }
    else {
        if (arr[index] > max) {
            max = arr[index];    
        }
        return findMax(arr, index + 1, max)       
    }
}

function factorial(num, index = num - 1, result = num){
    // This function returns the factorial of a given number.
    if (index === 0) {
        return result
    }
    else {
        result *= index
        return factorial(num, index - 1, result)
    }
}

function fibonacci(n, seq = [1,1]){
    if (n < seq.length) {
        return seq[0]
    }
    else if (seq.length === n) {
        return seq[n-1]
    }
    else {
        seq.push(seq[seq.length-1] + seq[seq.length-2])
        return fibonacci(n, seq)
    }
}
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1


function coinFlips(n, arr = []){
    options = ['H', 'T']
    if (Math.pow(2,n) === arr.length) {
        return arr
    }
    else {
        function new(i = 0, j = 0, opt = '') {
            if (i === n) {
                if (!arr.includes(opt)) {
                arr.push(opt)
                return coinFlips(n, arr)
                }
                else {
                   return new(0, j+1, '') 
                }
            }
            else {
                opt += options[j]
                return new(i+1, j, opt)
            }
        }
    }

         for (let i = 0; i < options.length; i++) {
            for (let j = 0; j < options.length; j++) {
                arr.push(options[i] + options[j]);
                }
            }
        }
 
// logic for permuations of a toin coss.
// iterate over the options array
// option 1 + option 1
// option 1 + option 2
// option 2 + option 1 
// option 2 + option 2

    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"

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