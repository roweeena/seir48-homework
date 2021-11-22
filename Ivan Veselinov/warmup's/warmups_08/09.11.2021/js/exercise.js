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
// plain
// Input:  11234567890
// Output: (123) 456-7890
// I.e.  the first 3 numbers are the area code  and are in brackets;
// then comes a space  then the next 3 numbers (the exchange code)
// followed by a dash  then then the last four numbers.


const phoneNumbers = function(num){

  const result = '';
  console.log(num);

  //delete enythunt that is not a number
    let numString = num.toString();
    // => "12345errr"
    console.log(deleteNumerals(numString));
    // => 12345

      //if number is bigger then 10 or 11
    if ( numString.length < 10 || numString.length > 11){
      console.log('invalid number or wrong length');
      return '000000000'
    }

      //if number is 11
    if ( numString.length === 11 ){
      return elevenTest();
    }else{
      return numString;
    }
        //else {
          //return num`
      return numString;

}

const deleteNumerals = function(num){
  return num.replace(/\D+/g, "");
}


//is first char 1
    //return it after formating
  //return a brunch of 00000000
const elevenTest = function(num){
  if (num[0] === '1') {
    return num;
  }else{
    console.log('Invalid number length or first number is 1?');
    return '000000000'
  }

  const cleanUpNumber = function(num){
    let output = ''
    //get the first characters ()

    output += `(${num.slice(0, 2)})`

    //next 3- 5 char-
      output += `${num.slice(2, 5)}-`
    //get the rest-
    output += `${num.slice(5)}-`
    return output;
  }
}

console.log(phoneNumbers(8234567891112));
console.log(phoneNumbers("1ddsd2345"));
console.log(phoneNumbers(1234567891));
console.log(phoneNumbers(2234567891112));
