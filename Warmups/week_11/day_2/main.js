// # Happy Numbers
//
// A happy number is defined by the following process:
//
// - Starting with any positive integer,
// - Replace the number by the sum of the squares of its digits, and
// repeat the process until
// - the number equals 1 (where it will stay),
// - or it loops endlessly in a repeating cycle which does not include 1.
//
// Those numbers for which this process ends in 1 are happy numbers, while those for which this process do not end in 1 are unhappy numbers.
//
// For example number 7 is happy because after a number of steps the computed sequence ends up with a 1: `7, 49, 97, 130, 10, 1`
//
// While 3 is not, and would give us an infinite sequence: `3, 9, 81, 65, 61, 37, 58, 89, 145, 42, 20, 4, 16, 37, 58, 89, 145, 42, 20, 4, 16, 37, ...`
//
// ## Task
// Write a function that takes n as parameter and return true if and only if n is an happy number, false otherwise.
//
// ### Bonus
// write a program in Javascript which prints the first 10 happy numbers, starting from 1.


const happyNumbers = {
  findSquareSum: function(digit) {
    let sum = 0;

    let string = digit.toString();

    //console.log(string);
    for (let i = 0; i < string.length; i++) {
      //console.log('checking', sum, string[i]);
      //console.log('squaring', string[i] * string[i]);
      sum += string[i] * string[i];
      //console.log('sum', sum);
    }
    return sum;
  },

  isHappy: function(n) {

    let array =[];
    //console.log(this.findSquareSum(n));
    while (true) {
      //console.log(array);
      array.push(n);
       //checking whether or not 1 is present in the array
      if (n === 1) {
        return true;
      } else if ( array.indexOf(n = this.findSquareSum(n)) !== -1) { //forcing this.findSquareSum(n) to equal n. if the number exists in the array (not equal -1) then return false
        return false;
      }
    }
  },
  printNumbers: function(num) {
    let list = [];

    let found = 0;

    for (let i = 0; found < num; i++) {
      console.log(i);
      console.log(this.isHappy(i));
      console.log(list);
      if (this.isHappy(i)) {
        found++;
        list.push(i)
      }
    }
    return list
  }

}

//console.log(happyNumbers.isHappy(7))
//console.log(happyNumbers.isHappy(3))
console.log(happyNumbers.printNumbers(10))
