// # Leap Year Warmup Exercise
// ## Do this in HTML and JS!

// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:

const isLeapYear = function (year)
{
    // Every year that is evenly divisible by 4
    if (year % 4 === 0)
    {
        return true;
    }
    // Except if it is evenly divisible by 100...
    else if (year % 100 === 0)
    {
        return false;
    }
    // Unless it is also divisible by 400
    else if(year % 400 === 0)
    {
        return true;
    }
    
    else
    {
        return false;
    }
}

console.log(isLeapYear(1997));
console.log(isLeapYear(1998));
console.log(isLeapYear(1999));
console.log(isLeapYear(2000));
console.log(isLeapYear(2001));
console.log(isLeapYear(2002));
console.log(isLeapYear(2003));
console.log(isLeapYear(2004));

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