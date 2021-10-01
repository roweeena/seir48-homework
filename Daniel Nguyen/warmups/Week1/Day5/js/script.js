// # Leap Year Warmup Exercise
// ## Do this in HTML and JS!

// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
//
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400

const isLeapYear = function(year) {
  const divisibleBy = (divisor) => (year % divisor === 0);
  const isLeapYear = divisibleBy(4) && (!divisibleBy(100) || divisibleBy(400));
  return isLeapYear;
}

// Test Data... Make sure it is working!
//
// - 1997 is not a leap year, it should return false
// - 1996 is a leap year, it should return true
// - 1900 is not a leap year, it should return false
// - 2000 is a leap year, it should return true

const testIsLeapYear = function() {
  const leapYears = [];
  for (let i = 1800; i <= 2022; i++) {
    isLeapYear(i) && leapYears.push(i);
  }
  console.log(leapYears.join("\n"));
}

testIsLeapYear();

// How to structure it...
//
// - We want a custom function called isLeapYear
//
// Bonus!
//
// - Ask the user what number they want to test
//
// Watch a whole heap of information about leap years... http://www.youtube.com/watch?v=xX96xng7sAE
