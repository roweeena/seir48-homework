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

const validateCreditCard = creditCard => {

  let cleanCred = creditCard.replace(/-/g, '');
  let sum = 0;
  let differentDigits = 0

  if ( cleanCred.length < 16 ) { //checks that credit number length is 16
    return {
      valid: false,
      number: creditCard,
      error: `not enough digits`,
    };
  }

  if ( /^\d+$/.test(cleanCred) === false) { // checks that the credit card string only contains digits
    return {
      valid: false,
      number: creditCard,
      error: `invalid characters`,
    };
  }

  if ( parseInt(cleanCred[cleanCred.length-1]) % 2 !== 0 ) { //checks that final digit is even
    return {
      valid: false,
      number: creditCard,
      error: `final digit not an even number`,
    };
  }

  for ( let i = 0; i < cleanCred.length; i++ ) { //sums the total of the credit card number
    sum += parseInt(cleanCred[i]);
  }
  if ( sum < 16 ) {
    return {
      valid: false,
      number: creditCard,
      error: `sum of digits less than 16`,
    };
  }

  for ( let i = 1; i < cleanCred.length; i++ ) { //iterates through the string and checks if the current character is different to the one before it
    if (cleanCred[i] !== cleanCred[i - 1]) {
      differentDigits++
    }
  }

  if (differentDigits < 1) {
    return {
      valid: false,
      number: creditCard,
      error: `not enough unique digits`,
    };
  }

  return {
    valid: true,
    number: creditCard,
  };
}


// The following credit card numbers are valid:

const valid1 = `9999-9999-8888-0000`
const valid2 = `6666-6666-6666-1666`

// The following credit card numbers are invalid:

const invalid1 = `a923-3211-9c01-1112`// invalid characters
const invalid2 =  `4444-4444-4444-4444`// only one type of number
const invalid3 =  `1111-1111-1111-1110` //sum less than 16
const invalid4 =  `6666-6666-6666-6661` //odd final number

console.log(validateCreditCard(valid1));
console.log(validateCreditCard(valid2));
console.log(validateCreditCard(invalid1));
console.log(validateCreditCard(invalid2));
console.log(validateCreditCard(invalid3));
console.log(validateCreditCard(invalid4));

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
