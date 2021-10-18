// # Leap Year Warmup Exercise
// ## Do this in HTML and JS!
// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:

//declare my function
const isItALeapYear = function (year){

  //if the year is divisible by 400
  if (year % 400 === 0){
    return true
  } else if (year % 100 === 0){
    return false
  } else if (year % 4 === 0){
    return true
  } else{
    return false
  }
}

console.log(isItALeapYear(1997));
console.log(isItALeapYear(1996));
console.log(isItALeapYear(1900));
console.log(isItALeapYear(2000));





// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!
// - 1997 is not a leap year, it should return false
// - 1996 is a leap year, it should return true
// - 1900 is not a leap year, it should return false
// - 2000 is a leap year, it should return true
// How to structure it...
// - We want a custom function called isLeapYear
// Bonus!
// - Ask the user what number they want to test
// Watch a whole heap of information about leap years... http://www.youtube.com/watch?v=xX96xng7sAE
