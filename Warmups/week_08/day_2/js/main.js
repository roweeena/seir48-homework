

const format = function(number){
  // delete anything that isn't a number
  let numberString = number.toString();
  numberString = deleteNonNumerals(numberString);

  //is the number <10 or >11 in length?
  if ( numberString.length < 10 || numberString.length > 11){
    console.log("invalid number, wrong length ");
    return '000000000'
  }

  // if the number 11 characters in length?
  if( numberString.length === 11){
    return elevenTest(numberString);
  } else{
    return cleanUpNumber(numberString);
  }
}

const deleteNonNumerals = function(num){
  return num.replace(/\D+/g, "");
}

const elevenTest = function(num){
  if ( num[0] === '1'){
    return cleanUpNumber(num);
  } else{
    console.log("invalid number, is 11 characters and doesn't start with a 1");
    return '000000000';
  }
}

const cleanUpNumber = function(num){
  let output = '';

  //get the first three charcters
  output += `(${num.slice(0, 3)}) `;
  //next 3 characters  -
  output += `${num.slice(3, 6)}-`;
  //get the rest  -
  output += `${num.slice(6)}`;
  return output;
}


// # Phone Number Check
//
// The rules for a valid phone number in this exercise are as follows:
//
// - If the phone number has any non-numerals in it they should be removed/ignored
// - If the phone number is 11 digits and the first number is 1 trim the 1 and use the first 10 digits
// - If the phone number is 11 digits and the first number is not 1 then it is an invalid number
// - If the phone number is 10 digits long it is valid; if not it is invalid
//
// ## Exercise
//
// 1. Write a Javascript function which takes a phone number as a string and returns the cleaned-up version of the number if it is valid (ie. with non-numerals removed) or if not valid returns '00000000' (ten zeroes)
// 2. Write a Javascript function which returns a formatted version of the given phone number ie:
//
// ```plain
// Input:  11234567890
// Output: (123) 456-7890
// I.e.  the first 3 numbers are the area code  and are in brackets;
// then comes a space  then the next 3 numbers (the exchange code)
// followed by a dash  then then the last four numbers.
// ```



console.log(format(1234567890))
console.log(format(123456))
console.log(format("123r4567t890"))
console.log(format(1234567890))
console.log(format(12345678901))
