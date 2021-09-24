// # Credit Card Validation

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16

const validateCreditCard = function(rawCard) {       //  `9999-9999-8888-0000`
  const card = removeDashes(rawCard);                //  `9999999988880000`

  let errors = {
    sixteenChars: isSixteenChars(card),
    onlyNumbers: onlyNumbers(card),
    atLeastTwoUnique: atLeastTwoUnique(card),
    finalDigitIsEven: finalDigitIsEven(card),
    sumGreaterThanSixteen: sumGreaterThanSixteen(card),
  };

  // Returns true if there are no errors
  const valid = !Object.values(errors).includes(false);

  const output = { valid, card };

  // Creates a comma-separated string of any errors
  const errorLog = Object.keys(errors)
                         .filter(error => !errors[error])
                         .join(', ');                //   "onlyNumbers, finalDigitIsEven..."

  // Adds errors to output only if they exist
  if (errorLog) {
    output.errors = errorLog;
  }

  console.log(output);
  return output;
}

const removeDashes = function (card) {
  return card.replaceAll('-', '');
}

const isSixteenChars = function (card) {
  return card.length === 16;
}

const onlyNumbers = function (card) {
  const isAlldigits = Number(card) == card;
  return isAlldigits;
}

const atLeastTwoUnique = function (card) {
  const array = card.split('');
  let unique = [];
  for (let i = 0; i < array.length; i++) {
    if (!unique.includes(array[i])) {
      unique.push(array[i]);
    }
  }
  return unique.length !== 1;
}

const finalDigitIsEven = function (card) {
  const array = card.split('');
  return array[array.length - 1] % 2 === 0;
}

const sumGreaterThanSixteen = function (card) {
  const array = card.split('');
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i])) {
      sum += Number(array[i]);
    }
  }
  return sum > 16;
}

// Some cards to test
const cards = [
  `9999-9999-8888-0000`,      // valid
  `6666-6666-6666-1666`,      // valid
  `9999-9999-8888-00000`,     // invalid {isSixteenChars}
  `a923-3211-9c01-1112`,
  `4444-4444-4444-4444`,
  `1111-1111-1111-1110`,
  `6666-6666-6666-6661`,
]

const testCards = function (cards) {
  for (let i = 0; i < cards.length; i++) {
    const card = removeDashes(cards[i])
    // console.log(cards[i], 'isSixteenChars', isSixteenChars(card));
    // console.log(cards[i], 'onlyNumbers', onlyNumbers(card));
    // console.log(cards[i], 'atLeastTwoUnique', atLeastTwoUnique(card));
    // console.log(cards[i], 'finalDigitIsEven', finalDigitIsEven(card));
    // console.log(cards[i], 'sumGreaterThanSixteen', sumGreaterThanSixteen(card));
    // console.log(cards[i], 'validateCreditCard', validateCreditCard(card));
    validateCreditCard(card);
  }
}

testCards(cards);

//
// The following credit card numbers are valid:
//
// validateCreditCard(`9999-9999-8888-0000`);
// validateCreditCard(`6666-6666-6666-1666`);
//
// The following credit card numbers are invalid:

// validateCreditCard(`9999-9999-8888-00000`); //  not 16 characters
// validateCreditCard(`a923-3211-9c01-1112`);  //  invalid characters
// validateCreditCard(`4444-4444-4444-4444`);  //  only one type of number
// validateCreditCard(`1111-1111-1111-1110`);  //  sum less than 16
// validateCreditCard(`6666-6666-6666-6661`);  //  odd final number
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
