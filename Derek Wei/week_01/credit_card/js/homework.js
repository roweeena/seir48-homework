// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16
//
// The following credit card numbers are valid:
//
// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`
//
// The following credit card numbers are invalid:
//
// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number
//
// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```
//
// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
//
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

// converts string to an array and checks if every character is a number
const allValidCharacters = (num) => num.split("").every(n => !isNaN(n));

// checks length of string is equal to 16
const numOfDigits16 = (num) => num.length === 16;

// checks if only one number in string, by using for loop to see if there is a change in an adjacent number
const onlyOneNumber = (num) => {

  //maps array of strings to array of numbers
  let numArr = num.split("").map(n => Number(n));

  for (let i = 1; i < numArr.length; i++) {
    if (numArr[i] !== numArr[i - 1]) {
      return false;
    }
  }
  return true;
}

// checks if final digit is even using conditional and mod2
const finalDigitEven = (num) => {

  let numArr = num.split("").map(n => Number(n));

  if (numArr[numArr.length - 1] % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// checks if sum of numbers is under 16 using for loop to add each number in array
const sumLessThan16 = (num) => {

  let numArr = num.split("").map(n => Number(n));
  let sum = 0;

  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }

  if (sum < 16) {
    return true;
  } else {
    return false;
  }
}

// main function to check credit card number is valid assuming string input only
const validateCreditCard = (input) => {

  //
  let cardInfo = {valid: false, number: input};

  // cleans the dashes from the argument
  let num = input.replaceAll('-','');

  // check if numbers only
  if (!allValidCharacters(num)) {
    cardInfo.error = 'invalid_character'
    return cardInfo;
  }
  // check if 16 digits
  if (!numOfDigits16(num)) {
    cardInfo.error = 'wrong_length'
    return cardInfo;
  }
  // check if only one type of number
  if (onlyOneNumber(num)) {
    cardInfo.error = 'single_number_detected'
    return cardInfo;
  }
  // check if final digit is even
  if (!finalDigitEven(num)) {
    cardInfo.error = 'ends_in_odd_number'
    return cardInfo;
  }
  // check if sum is less than 16
  if (sumLessThan16(num)) {
    cardInfo.error = 'sum_under_16';
    return cardInfo;
  }

cardInfo.valid = true;
return cardInfo;
}

console.log(validateCreditCard(`a923-3211-9c01-1112`));
console.log(validateCreditCard(`8923-32e1-92w1-1112`));
console.log(validateCreditCard(`44232-444232-44444-41234`));
console.log(validateCreditCard(`4444-4444-4444-4444`));
console.log(validateCreditCard(`1111-1111-1111-1111`));
console.log(validateCreditCard(`1111-1111-1111-1110`));
console.log(validateCreditCard(`6666-6666-6666-6661`));
console.log(validateCreditCard(`6666-6666-6666-6662`));
console.log(validateCreditCard(`1123-3211-9001-1112`));
