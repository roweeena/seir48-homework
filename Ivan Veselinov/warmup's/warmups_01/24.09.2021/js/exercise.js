// # Leap Year Warmup Exercise
// ## Do this in HTML and JS!
//
// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
//
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
//
// Test Data... Make sure it is working!
//
//
//
// How to structure it...
//
// - We want a custom function called isLeapYear
//
// Bonus!
//
// - Ask the user what number they want to test

const lapYear = function (year){
  if ( year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ) { // year % 100 = false //
    console.log(`Year ${year} is a LAP YEAR!! --->` + true);
  }else{
    console.log(`Year ${year} is NOT - a LAP YEAR!! --->` + false);
  }
}
lapYear(1997);  // - 1997 is not a leap year, it should return false
lapYear(1996);  // - 1996 is a leap year, it should return true
lapYear(1900);  // - 1900 is not a leap year, it should return false
lapYear(2000);  // - 2000 is a leap year, it should return true
console.log(`Please enter you number that you want to test !`);


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////   RETURN /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
const lapYearNew = function (year){
  if ( year % 4 === 0){
    return `This is a lap year ${year}`, true;
  } if(year % 100 !== 0){
    return `This is not a lap year ${year}`, false;
  } if (year % 400 ===0){
    return true;
  }console.log( `This is a lap year ${year}`);
}
console.log(`year is a leap `+ lapYearNew.year);


console.log(lapYearNew(1997));
console.log(lapYearNew(1996));
console.log(lapYearNew(1900));
console.log(lapYearNew(2000));
