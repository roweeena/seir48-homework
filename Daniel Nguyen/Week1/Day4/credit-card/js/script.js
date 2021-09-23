// # Credit Card Validation

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16

const validateCreditCard = function(cardNo) {       //  `9999-9999-8888-0000`

  // All errors initialised as false; changed to true as each test is passed.
  let errors = {
    sixteenChars: false,
    onlyNumbers: false,
    atLeastTwoUnique: false,
    finalDigitIsEven: false,
    sumGreaterThanSixteen: false,
  };

  // Removes dashes from card string
  const withoutDashes = cardNo.replaceAll('-','');  //  `9999999988880000`

  // Checks if there are 16 characters
  if (withoutDashes.length === 16) {
    errors.sixteenChars = true;
  }

  // Converts to number
  const digits = parseInt(withoutDashes);         //  a string or a number

  // Checks if only numbers
  if (digits == withoutDashes) {
    errors.onlyNumbers = true;
  }

  // Converts to an array of individual characters
  const asArray = withoutDashes.split('');        //  ['9', '2', '3', 'a'...]

  // Returns the amount of unique characters
  const getUnique = function() {
    let unique = [];
    for (let i = 0; i < asArray.length; i++) {
      if (!unique.includes(asArray[i])) {
        unique.push(asArray[i]);
      }
    }
    return unique.length;
  }

  // Checks if at least two unique characters
  if (getUnique() > 1) {
    errors.atLeastTwoUnique = true;
  }

  // Checks if final digit is even
  if (asArray[asArray.length - 1] % 2 === 0) {
    errors.finalDigitIsEven = true;
  }

  // Adds all the digits; returns NaN if there is a non-number
  const sumDigits = function() {
    let sum = 0;
    for (let i = 0; i < asArray.length; i++) {
      sum += parseInt(asArray[i]);
    }
    return sum;
  }

  // Checks if the digits add up to more than 16
  if (sumDigits() > 16) {
    errors.sumGreaterThanSixteen = true;
  }

  // Returns true if there are no errors
  const valid = !Object.values(errors).includes(false);

  // Creates a comma-separated string of any errors
  const errorLog = Object.keys(errors)
                         .filter(error => !errors[error])
                         .join(', ');


  const output = { valid, cardNo };

  // Adds errors to output only if they exist
  if (errorLog) {
    output.errors = errorLog;
  }

  console.log(output);
  return output;
}




//
// The following credit card numbers are valid:
//
validateCreditCard(`9999-9999-8888-0000`);
validateCreditCard(`6666-6666-6666-1666`);
//
// The following credit card numbers are invalid:

validateCreditCard(`9999-9999-8888-00000`); //  not 16 characters
validateCreditCard(`a923-3211-9c01-1112`);  //  invalid characters
validateCreditCard(`4444-4444-4444-4444`);  //  only one type of number
validateCreditCard(`1111-1111-1111-1110`);  //  sum less than 16
validateCreditCard(`6666-6666-6666-6661`);  //  odd final number
//
// ## Example
// ```
// validateCreditCard(`9999-9999-8888-0000`); // Returns: true
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
